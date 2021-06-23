import isNull from './isNull'
import typeOf from '@wareset-utilites/lang/typeOf'

export const isObject = (v: any): v is {} => typeOf(v, 'object') && !isNull(v)
export default isObject
