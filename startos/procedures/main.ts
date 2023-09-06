import { sdk } from '../sdk'
import { checkPortListening } from '@start9labs/start-sdk/lib/health/checkFns'
import { ExpectedExports } from '@start9labs/start-sdk/lib/types'
import { HealthReceipt } from '@start9labs/start-sdk/lib/health/HealthReceipt'
import { Daemons } from '@start9labs/start-sdk/lib/mainFn/Daemons'
import { uiPort } from './interfaces'
import { dependencyMounts } from './dependencies/dependencyMounts'

export const main: ExpectedExports.main = sdk.setupMain(
  async ({ effects, utils, started }) => {
    /**
     * ======================== Setup ========================
     *
     * In this section, you will fetch any resources or run any commands necessary to run the service
     */
    console.info('Starting Hello Moon!')

    // Mount Hello World dir (this would only be necessary if Hello Moon is actually reading data from Hello World file system)
    await utils.mountDependencies(dependencyMounts['hello-world'])

    /** uncomment to make Hello World a conditional dependency */
    // const needsWorld = await utils.store.getOwn('/needsWorld').once()
    // if (needsWorld)
    //   await utils.mountDependencies(dependencyMounts['hello-world'])

    /**
     * ======================== Additional Health Checks (optional) ========================
     *
     * In this section, you will define additional health checks beyond those associated with daemons
     */
    const healthReceipts: HealthReceipt[] = []

    /**
     * ======================== Daemons ========================
     *
     * In this section, you will create one or more daemons that define the service runtime
     *
     * Each daemon defines its own health check, which can optionally be exposed to the user
     */
    return Daemons.of({
      effects,
      started,
      healthReceipts, // Provide the healthReceipts or [] to prove they were at least considered
    }).addDaemon('webui', {
      command: ['./hello-moon'], // The command to start the daemon
      requires: [],
      ready: {
        display: 'Web Interface',
        // The function to run to determine the health status of the daemon
        fn: () =>
          checkPortListening(effects, uiPort, {
            successMessage: 'The web interface is ready',
            errorMessage: 'The web interface is unreachable',
          }),
      },
    })
  },
)
