import { isFunction } from './isFunction'

export const isNativeFunction = (v: any): boolean =>
  isFunction(v) && /\{\s*\[\s*native\s+code\s*\]\s*\}\s*$/.test('' + v)
export default isNativeFunction
