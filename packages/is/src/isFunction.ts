import typeOf from '@wareset-utilites/lang/typeOf'

export const isFunction = <T extends Function>(v: any): v is T =>
  typeOf(v, 'function')
export default isFunction
