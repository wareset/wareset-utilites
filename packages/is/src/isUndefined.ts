import typeOf from '@wareset-utilites/lang/typeOf'

export const isUndefined = (v: any): v is undefined => typeOf(v, 'undefined')
export default isUndefined
