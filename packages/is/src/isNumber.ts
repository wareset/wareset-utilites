import { typeOf } from '@wareset-utilites/lang/typeOf'

export const isNumber = (v: any): v is number => typeOf(v, __number__)
const __number__ = typeOf(0)
export default isNumber
