import isObject from './isObject'
import Object from '@wareset-utilites/object/Object'
import { typed } from '@wareset-utilites/typed'

export const isObjectStrict = (value: any): boolean =>
  isObject(value) && typed(value, Object, null)
export default isObjectStrict
