import { typeOf } from '@wareset-utilites/lang/typeOf'

export const isString = (v: any): v is string => typeOf(v, __string__)
const __string__ = typeOf('')
export default isString
