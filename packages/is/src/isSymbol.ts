import { typeOf } from '@wareset-utilites/lang/typeOf'

export const isSymbol = (v: any): v is symbol => typeOf(v, 'symbol')
export default isSymbol
