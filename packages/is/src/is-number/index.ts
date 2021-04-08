import { typeOf } from '@wareset-utilites/lang/type-of'

const example = typeOf(1)
export const isNumber = (v: any): v is number => typeOf(v, example)
