import { typeOf } from '@wareset-utilites/lang/type-of'

export const isNumber = (value: any): boolean => typeOf(value, 'number')
