import { VercelRequest, VercelResponse } from '@vercel/node'
import { usersTable } from './lib/schema.ts'
import { eq } from 'drizzle-orm'
import { db } from './lib/db.ts'
import * as crypto from 'crypto'

function createBrightId(email: string) {
  const secretKey = process.env['SECRET_KEY'] || import.meta.env['SECRET_KEY']
  if (!secretKey) throw new Error('Secret key must be present in env variables')

  return crypto.scryptSync(email, secretKey, 32).toString('base64').slice(0, 43)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  const { email, integration } = req.body

  const hashedEmail = createBrightId(email)

  const result = await db.select().from(usersTable).where(eq(usersTable.id, hashedEmail))

  if (!result.length) {
    const brightId = this.createBrightId(email)

    await db.insert(usersTable).values({
      id: brightId,
      integrations: [integration]
    })

    res.send({
      id: brightId
    })
  }
  res.send({
    id: res[0].id
  })
}
