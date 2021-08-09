import { typeOf } from '@wareset-utilites/lang/typeOf'

export const isBoolean = (v: any): v is boolean => typeOf(v, __boolean__)
const __boolean__ = typeOf(true)
export default isBoolean
