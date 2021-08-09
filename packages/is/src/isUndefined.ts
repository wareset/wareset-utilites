import { typeOf } from '@wareset-utilites/lang/typeOf'

export const isUndefined = (v: any): v is undefined => typeOf(v, __undef__)
let undef: undefined
const __undef__ = typeOf(undef)
export default isUndefined
