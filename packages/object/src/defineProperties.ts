import { Object as __Object__ } from './Object'
import { keys } from './keys'
import { defineProperty } from './defineProperty'

export const defineProperties =
  __Object__.defineProperties ||
  (((o: any, props: any) =>
    keys(props).forEach((key) => {
      defineProperty(o, key, props[key])
    })) as typeof Object.defineProperties)
export default defineProperties
