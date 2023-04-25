import { manifest } from '../../manifest'
import { setupMigrations } from 'start-sdk/lib/migrations/setupMigrations'
import { v4_0_0 } from './v4_0_0'

/**
 * Add each new migration as the next argument to this function
 */
export const { init, uninit } = setupMigrations(manifest,
  v4_0_0,
)
