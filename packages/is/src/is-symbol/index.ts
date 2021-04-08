import { typeOf } from '@wareset-utilites/lang/type-of'

export const isSymbol = (v: any): v is symbol => typeOf(v, 'symbol')
