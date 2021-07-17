import { isFunction } from './isFunction'

export const isNativeFunction = (value: any): boolean =>
  isFunction(value) && /\{\s*\[\s*native\s+code\s*\]\s*\}\s*$/.test('' + value)
export default isNativeFunction
