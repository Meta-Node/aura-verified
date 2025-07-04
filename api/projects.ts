import { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from './lib/db'
import { projectsTable } from './lib/schema'
import { eq } from 'drizzle-orm'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const projects = await db.select().from(projectsTable).where(eq(projectsTable.isActive, true))

  res.send(projects)
}
