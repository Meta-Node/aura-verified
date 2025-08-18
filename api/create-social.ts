import { VercelRequest, VercelResponse } from '@vercel/node'
import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { db } from './lib/db.js'
import { auraPlayersSocialTable } from './lib/schema.js'

const hashSchema = z.string().regex(/^\$2[ab]\$[0-9]{2}\$[A-Za-z0-9./]{53}$/, 'Invalid bcrypt hash')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  try {
    const { hash } = req.body
    hashSchema.parse(hash)

    const isStored = await db
      .select()
      .from(auraPlayersSocialTable)
      .where(eq(auraPlayersSocialTable.hash, hash))

    if (isStored.length > 0) {
      res.status(200).json({ valid: true })
      return
    }

    await db.insert(auraPlayersSocialTable).values({
      hash
    })

    res.status(200).json({ valid: true })
  } catch (error) {
    res.status(400).json({ error: 'Invalid bcrypt hash' })
  }
}
