import { sdk } from '../sdk'
import { configSpec } from './config/spec'

export const uiPort = 8080
export const webUiInterfaceId = 'webui'

/**
 * ======================== Interfaces ========================
 *
 * In this section, you will decide how the service will be exposed to the outside world
 */
export const setInterfaces = sdk.setupInterfaces(
  configSpec,
  async ({ effects, utils, input }) => {
    const multi = utils.host.multi('multi')
    const multiOrigin = await multi.bindPort(uiPort, { protocol: 'http' })
    const multiInterface = utils.createInterface({
      name: 'Web UI',
      id: webUiInterfaceId,
      description: 'The web interface of Hello Moon',
      ui: true,
      username: null,
      path: '',
      search: {},
    })

    const multiReceipt = await multiInterface.export([multiOrigin])

    return [multiReceipt]
  },
)
