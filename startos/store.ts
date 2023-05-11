/**
 * Here you define the set of data that the service wrapper will persist for self consumption or export to users and other services
 *
 * It is conventional for the "config" key to store the service's saved config, excluding sensitive data like passwords
 *
 * Hello Moon has no Wrapper Data. See Hello World for an example
 */
export interface Store {
  /** uncomment to make Hello World a conditional dependency */
  // config: { helloWorld: boolean }
}
