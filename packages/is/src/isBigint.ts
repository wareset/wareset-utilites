import typeOf from '@wareset-utilites/lang/typeOf'

export const isBigint = (v: any): v is symbol => typeOf(v, 'bigint')
export default isBigint
