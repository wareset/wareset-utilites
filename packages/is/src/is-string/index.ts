import { typeOf } from '@wareset-utilites/lang/type-of'

export const isString = (value: any): boolean => typeOf(value, 'string')
