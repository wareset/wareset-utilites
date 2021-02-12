import { typeOf } from '@wareset-utilites/lang/type-of'

export const isFunction = (value: any): boolean => typeOf(value, 'function')
