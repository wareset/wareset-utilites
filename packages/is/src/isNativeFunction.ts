import { String as __String__ } from '@wareset-utilites/string/String'
import { endsWith } from '@wareset-utilites/string/endsWith'
import { isFunction } from './isFunction'

// export const isNativeFunction = (value: any): boolean =>
//   isFunction(value) && /\{\s*\[\s*native\s+code\s*\]\s*\}\s*$/.test('' + value)
// export default isNativeFunction

const __end__ = (__String__ + '').split(')').pop()!
export const isNativeFunction = (value: any): boolean =>
  isFunction(value) && endsWith('' + value, __end__)
export default isNativeFunction
