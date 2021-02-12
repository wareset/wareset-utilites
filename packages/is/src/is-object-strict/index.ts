import { isObject } from '../is-object'
import { typed } from '@wareset-utilites/typed'

export const isObjectStrict = (value: any): boolean =>
  isObject(value) && typed(value, Object, null)
