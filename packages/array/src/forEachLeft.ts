import { findIndexDirtyLeft } from './lib'

export const forEachLeft = <L extends ArrayLike<unknown> | unknown[]>(
  list: L,
  callback: (
    value: L[number],
    key: number,
    list: L,
    context: {
      index: number
      break: boolean
    }
  ) => any,
  offset?: number
): void => {
  if (list.length > 0) {
    findIndexDirtyLeft(
      list,
      (v, k, a, s): any => {
        callback(v, k, a, s)
      },
      offset
    )
  }
}

export default forEachLeft
