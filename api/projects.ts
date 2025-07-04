import { VercelRequest, VercelResponse } from '@vercel/node'
import { db } from './lib/db.ts'
import { projectsTable } from './lib/schema.ts'
import { eq } from 'drizzle-orm'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const projects = await db.select().from(projectsTable).where(eq(projectsTable.isActive, true))

  console.log(projects)

  res.send(projects)
}
