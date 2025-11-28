/**
 * tasks.org.ai - Type Definitions
 *
 * Normalized task definitions and hierarchies.
 *
 * @see https://tasks.org.ai
 * @license CC-BY-SA-4.0
 */

import type { Thing } from 'schema.org.ai'

import type { Activities } from 'activities.org.ai'

/**
 * Task - https://tasks.org.ai/Task
 */
export interface Task extends Activities {
  '@context': 'https://tasks.org.ai'
  '@type': 'https://tasks.org.ai/Task'
  '@id': string
  name: string
  description?: string
}

