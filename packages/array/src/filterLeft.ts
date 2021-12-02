import { findIndexDirtyLeft } from './lib'

export const filterLeft = <L extends ArrayLike<unknown> | unknown[]>(
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
): L[number][] => {
  const res: L[number][] = []
  if (list.length > 0) {
    findIndexDirtyLeft(
      list,
      (v, k, a, s): any => {
        if (callback(v, k, a, s)) res.push(a[k])
      },
      offset
    )
  }
  return res
}

export default filterLeft
