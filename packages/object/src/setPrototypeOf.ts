/* eslint-disable guard-for-in */

import __Object__ from './Object'
import keys from './keys'

// prettier-ignore
export const setPrototypeOf =
  __Object__.setPrototypeOf ||
  (((obj: any, proto: any) => (
    !obj.__proto__
      ? keys(proto).forEach((prop) => { obj[prop] = proto[prop] })
      : (obj.__proto__ = proto),
    obj
  )) as typeof Object.setPrototypeOf)
export default setPrototypeOf
