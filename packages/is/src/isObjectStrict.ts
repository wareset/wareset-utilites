import { isObject } from './isObject'
import { Object as __Object__ } from '@wareset-utilites/object/Object'
import { typed } from '@wareset-utilites/typed'

export const isObjectStrict = (value: any): value is { [key: string]: any } =>
  isObject(value) && typed(value, __Object__, null)
export default isObjectStrict
