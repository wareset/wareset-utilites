import { isArray } from './isArray'
import { typed } from '@wareset-utilites/typed'
import { Array as __Array__ } from '@wareset-utilites/array/Array'

export const isArrayStrict = (v: any): v is any[] =>
  isArray(v) && typed(v, __Array__)
export default isArrayStrict
