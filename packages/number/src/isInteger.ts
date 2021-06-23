import floor from '@wareset-utilites/math/floor'
import isFinite from './isFinite'

export const isInteger = (v: any): boolean => isFinite(v) && floor(v) === v
export default isInteger
