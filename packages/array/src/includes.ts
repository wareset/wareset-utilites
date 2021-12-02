import { isEqual } from '@wareset-utilites/is/isEqual'

export const includes: {
  (source: ArrayLike<any>, value: any, fromIndex?: number): boolean
} = (source: any, value: any, fromIndex?: number): boolean => {
  for (let i = fromIndex! || 0; i < source.length; ++i) {
    if (isEqual(value, source[i])) return true
  }
  return false
}
export default includes
