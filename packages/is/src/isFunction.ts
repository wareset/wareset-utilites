import typeOf from '@wareset-utilites/lang/typeOf'

export const isFunction = (v: any): v is Function => typeOf(v, 'function')
export default isFunction
