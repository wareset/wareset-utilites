import { isNull } from '../is-null'
import { typeOf } from '@wareset-utilites/lang/type-of'

const example = typeOf({})
export const isObject = (v: any): v is {} => !isNull(v) && typeOf(v, example)
