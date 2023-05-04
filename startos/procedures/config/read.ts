import { ConfigSpec } from './spec'
import { WrapperData } from '../../wrapperData'
import { Read } from '@start9labs/start-sdk/lib/config/setupConfig'

/**
 * This function executes on config get
 *
 * Use this function to gather data from various files and assemble into a valid config to display to the user
 *
 * Hello Moon does not have config. See Hello World for an example
 */
export const read: Read<WrapperData, ConfigSpec> = async ({
  effects,
  utils,
}) => {
  /** uncomment to make Hello World a conditional dependency */
  // return utils.getWrapperData('/config').first()
}
