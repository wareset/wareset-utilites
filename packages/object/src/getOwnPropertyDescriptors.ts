/* eslint-disable max-len */

import { Object as __Object__ } from './Object'
import { getOwnPropertyDescriptor } from './getOwnPropertyDescriptor'
import { getOwnPropertyNames } from './getOwnPropertyNames'

// prettier-ignore
export const getOwnPropertyDescriptors =
  __Object__.getOwnPropertyDescriptors ||
  (((o: any) => getOwnPropertyNames(o).reduce(
    (res: any, k) => ((res[k] = getOwnPropertyDescriptor(o, k)), res),
    {})) as typeof Object.getOwnPropertyDescriptors)
export default getOwnPropertyDescriptors
