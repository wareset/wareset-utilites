import { isNull } from './isNull'
import { typeOf } from '@wareset-utilites/lang/typeOf'

export const isObject = (v: any): v is { [key: string]: any } =>
  typeOf(v, __object__) && !isNull(v)
const __object__ = typeOf({})
export default isObject
