import { typeOf } from '@wareset-utilites/lang/type-of'

export const isSymbol = (value: any): boolean => typeOf(value, 'symbol')
