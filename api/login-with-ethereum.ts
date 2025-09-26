import { VercelRequest, VercelResponse } from '@vercel/node'
import * as crypto from 'crypto'
import { eq } from 'drizzle-orm'
import { db } from './lib/db.js'
import { usersTable } from './lib/schema.js'

const regex = /^Wallet:\s*(.+)\nDate:\s*(.+)\nConfirmation:\s*(.+)$/m

function createBrightId(email: string) {
  const secretKey = process.env['SECRET_KEY']

  if (!secretKey) throw new Error('Secret key must be present in env variables')

  return crypto.scryptSync(email, secretKey, 32).toString('base64').slice(0, 43)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  const { message, hashed } = req.body

  const match = message.match(regex)

  if (!match || !hashed) {
    res.status(400).send('invalid data')
    return
  }

  const [, wallet, date, confirmation] = match

  if (new Date(date) < Date.now() - 20000) {
  }

  const hashedEmail = createBrightId(email)

  const result = await db.select().from(usersTable).where(eq(usersTable.id, hashedEmail))

  if (result.length === 0) {
    const brightId = createBrightId(email)

    await db.insert(usersTable).values({
      id: brightId,
      integrations: [integration]
    })

    res.json({
      id: brightId
    })
    return
  }
  res.json({
    id: result[0].id
  })
}
