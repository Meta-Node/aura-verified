import { drizzle } from 'drizzle-orm/neon-http'

export const db = drizzle(import.meta.env.DATABASE_URL!)
