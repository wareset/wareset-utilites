import { findIndexDirtyRight } from './lib'

export const everyRight = <L extends ArrayLike<unknown> | unknown[]>(
  list: L,
  callback: (
    value: L[number],
    key: number,
    list: L,
    context: {
      index: number
      break: boolean
    }
  ) => boolean,
  offset?: number
): boolean => list.length === 0 ||
  findIndexDirtyRight(list, (v, k, a, s) => !callback(v, k, a, s), offset) < 0

export default everyRight
