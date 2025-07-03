import { VercelRequest, VercelResponse } from '@vercel/node'
import { usersTable } from './lib/schema'
import { eq } from 'drizzle-orm'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
  }

  const { email, integration } = req.body

  const hashedEmail = this.createBrightId(email)

  const db = this.dbService.getDb()

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
