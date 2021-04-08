import { typeOf } from '@wareset-utilites/lang/type-of'

const example = typeOf(true)
export const isBoolean = (v: any): v is boolean => typeOf(v, example)
