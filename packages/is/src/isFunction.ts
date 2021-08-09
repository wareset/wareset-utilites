import { typeOf } from '@wareset-utilites/lang/typeOf'

export const isFunction = <T extends Function>(v: any): v is T =>
  typeOf(v, __function__)
const __function__ = typeOf(isFunction)
export default isFunction
