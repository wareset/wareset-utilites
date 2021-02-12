import { typeOf } from '@wareset-utilites/lang/type-of'

export const isBoolean = (value: any): boolean => typeOf(value, 'boolean')
