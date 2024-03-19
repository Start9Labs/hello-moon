/**
 * The Store is for persisting data that are needed by the package but are NOT persisted by the upstream service. Do NOT persist data here that are already being persisted by the service itself.
 *
 * Store data should be kept to a minimum. Stateless packages are easier to maintain and eliminate unexpected behavior.
 */
export type Store = {
  /** uncomment to make Hello World a conditional dependency */
  // needsWorld: boolean
}
