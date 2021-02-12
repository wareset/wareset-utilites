import { isArray } from '../is-array'
import { typed } from '@wareset-utilites/typed'

export const isArrayStrict = (value: any): boolean =>
  isArray(value) && typed(value, Array)
