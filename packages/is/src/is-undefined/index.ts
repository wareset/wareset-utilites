import { typeOf } from '@wareset-utilites/lang/type-of'

let undef: undefined
const example = typeOf(undef)
export const isUndefined = (v: any): v is undefined => typeOf(v, example)
