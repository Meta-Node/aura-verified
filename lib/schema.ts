import { sql } from 'drizzle-orm'
import { integer, pgTable, varchar, timestamp, boolean } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
  id: varchar({ length: 43 }).notNull().primaryKey(),
  createdAt: timestamp().defaultNow(),
  integrations: varchar({ length: 255 }).notNull().array().default([])
})

export const notificationsTable = pgTable('notifications', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  toUserId: varchar({ length: 43 }).notNull(),
  message: varchar({ length: 255 }).notNull(),
  fromUserId: varchar({ length: 43 }).notNull(),
  createdAt: timestamp().defaultNow()
})

export const projectsTable = pgTable('projects', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  requirementLevel: integer().notNull(),
  deadline: timestamp().notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().default(sql`CURRENT_TIMESTAMP`),
  isActive: boolean().notNull().default(true),
  image: varchar({ length: 1000 })
})
