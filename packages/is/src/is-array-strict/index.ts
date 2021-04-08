import { isArray } from '../is-array'
import { typed } from '@wareset-utilites/typed'
import { array } from '@wareset-utilites/array/array'

export const isArrayStrict = (v: any): v is Array<any> =>
  isArray(v) && typed(v, array)
