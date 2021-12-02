import { isEqual } from '@wareset-utilites/is/isEqual'
import { findIndexDirtyLeft } from './lib'

export const indexOfLeft = <L extends ArrayLike<unknown> | unknown[]>(
  source: L,
  value: L[number],
  offset?: number
): number => findIndexDirtyLeft(source, (v) => isEqual(v, value), offset)

export default indexOfLeft
