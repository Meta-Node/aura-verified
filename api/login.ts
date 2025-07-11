import { VercelRequest, VercelResponse } from '@vercel/node'
import { usersTable } from './lib/schema.js'
import { eq } from 'drizzle-orm'
import { db } from './lib/db.js'
import * as crypto from 'crypto'

function createBrightId(email: string) {
  const secretKey = process.env['SECRET_KEY']

  if (!secretKey) throw new Error('Secret key must be present in env variables')

  return crypto.scryptSync(email, secretKey, 32).toString('base64').slice(0, 43)
}

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  const { email, integration } = req.body

  const hashedEmail = createBrightId(email)

  const result = await db.select().from(usersTable).where(eq(usersTable.id, hashedEmail))

  if (!result.length) {
    const brightId = createBrightId(email)

    await db.insert(usersTable).values({
      id: brightId,
      integrations: [integration]
    })

    res.send({
      id: brightId
    })
  }
  res.send({
    id: result?.[0]?.id
  })
}

export const POST = handler

export default handler
