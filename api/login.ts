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

export const POST = async (req: VercelRequest) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed')
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

    return Response.json(
      { id: brightId },
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  return Response.json(
    {
      id: result?.[0]?.id
    },
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
