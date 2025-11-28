/**
 * tasks.org.ai
 *
 * Normalized task definitions and hierarchies.
 *
 * @example
 * ```typescript
 * import { Task, things } from 'tasks.org.ai'
 * ```
 *
 * @see https://tasks.org.ai
 * @license CC-BY-SA-4.0
 */

// Re-export types
export type { Task } from './types'

// Import types for runtime use
import type { Task } from './types'

/**
 * Collection of all tasks instances
 * Fetched from https://tasks.org.ai
 */
export const things: Promise<(Task)[]> = fetch('https://tasks.org.ai/things.json')
  .then(res => res.json())
  .catch(() => [])

/**
 * Get a specific Task by ID
 */
export async function get(id: string): Promise<Task | undefined> {
  const items = await things
  return items.find(item => item['@id'] === id || item['@id'] === `https://tasks.org.ai/${id}`)
}

/**
 * Search tasks by name or description
 */
export async function search(query: string): Promise<(Task)[]> {
  const items = await things
  const q = query.toLowerCase()
  return items.filter(item =>
    item.name?.toLowerCase().includes(q) ||
    item.description?.toLowerCase().includes(q)
  )
}

/**
 * Domain metadata
 */
export const domain = {
  '@context': 'https://tasks.org.ai',
  '@id': 'https://tasks.org.ai',
  name: 'tasks.org.ai',
  parent: 'activities.org.ai',
  types: ['Task']
} as const
