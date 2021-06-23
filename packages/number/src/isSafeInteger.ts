import abs from '@wareset-utilites/math/abs'
import MAX_SAFE_INTEGER from './MAX_SAFE_INTEGER'
import isInteger from './isInteger'

export const isSafeInteger = (v: any): boolean =>
  isInteger(v) && abs(v) <= MAX_SAFE_INTEGER
export default isSafeInteger
