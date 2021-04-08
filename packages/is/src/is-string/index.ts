import { typeOf } from '@wareset-utilites/lang/type-of'

const example = typeOf('')
export const isString = (v: any): v is string => typeOf(v, example)
