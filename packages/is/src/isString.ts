import typeOf from '@wareset-utilites/lang/typeOf'

export const isString = (v: any): v is string => typeOf(v, 'string')
export default isString
