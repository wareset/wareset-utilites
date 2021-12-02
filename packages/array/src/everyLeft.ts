import { findIndexDirtyLeft } from './lib'

export const everyLeft = <L extends ArrayLike<unknown> | unknown[]>(
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
  findIndexDirtyLeft(list, (v, k, a, s) => !callback(v, k, a, s), offset) < 0

export default everyLeft
