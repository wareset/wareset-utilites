import typeOf from '@wareset-utilites/lang/typeOf'

export const isNumber = (v: any): v is number => typeOf(v, 'number')
export default isNumber
