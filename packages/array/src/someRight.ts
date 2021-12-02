import { findIndexDirtyRight } from './lib'

export const someRight = <L extends ArrayLike<unknown> | unknown[]>(
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
): boolean => list.length > 0 && findIndexDirtyRight(list, callback, offset) > -1

export default someRight
