import isArray from './isArray'
import { typed } from '@wareset-utilites/typed'
import Array from '@wareset-utilites/array/Array'

export const isArrayStrict = (v: any): v is Array<any> =>
  isArray(v) && typed(v, Array)
export default isArrayStrict
