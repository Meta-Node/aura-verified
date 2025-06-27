import type { Project } from '@/types/projects'
import { signal } from '@lit-labs/signals'

export const projects = signal<Project[]>([])
