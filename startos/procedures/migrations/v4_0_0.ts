import { Migration } from "start-sdk/lib/migrations/Migration"

/**
 * This is an example migration file
 * 
 * By convention, each version service requiring a migration receives its own file
 * 
 * The resulting migration (e.g. v4.0.0.0) is exported, then imported into migration/index.ts
 */
export const v4_0_0 = new Migration({
  version: '4.0.0',
  up: async ({ effects }) => {},
  down: async ({ effects }) => {}
})
