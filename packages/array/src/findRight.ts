import { findIndexDirtyRight } from './lib'

export const findRight = <L extends ArrayLike<unknown> | unknown[]>(
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
): L[number] | undefined => list.length > 0 &&
  (offset = findIndexDirtyRight(list, callback, offset)) > -1
    ? list[offset]
    : void 0

export default findRight
