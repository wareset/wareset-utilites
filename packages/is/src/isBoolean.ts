import typeOf from '@wareset-utilites/lang/typeOf'

export const isBoolean = (v: any): v is boolean => typeOf(v, 'boolean')
export default isBoolean
