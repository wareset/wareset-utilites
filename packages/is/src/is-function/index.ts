import { noop } from '@wareset-utilites/lang/noop'
import { typeOf } from '@wareset-utilites/lang/type-of'

const example = typeOf(noop)
export const isFunction = (v: any): v is Function => typeOf(v, example)
