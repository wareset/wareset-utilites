import { isFunction } from './isFunction'

export const isNativeFunction = (value: any): boolean =>
  isFunction(value) && /\{\s*\[native code\]\s*\}\s*$/.test('' + value)
export default isNativeFunction
