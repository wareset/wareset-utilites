import { isNull } from '../is-null'
import { typeOf } from '@wareset-utilites/lang/type-of'

export const isObject = (value: any): boolean =>
  !isNull(value) && typeOf(value, 'object')
