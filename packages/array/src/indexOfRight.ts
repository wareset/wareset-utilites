import { isEqual } from '@wareset-utilites/is/isEqual'
import { findIndexDirtyRight } from './lib'

export const indexOfRight = <L extends ArrayLike<unknown> | unknown[]>(
  source: L,
  value: L[number],
  offset?: number
): number => findIndexDirtyRight(source, (v) => isEqual(v, value), offset)

export default indexOfRight
