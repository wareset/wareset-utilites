import { findIndexDirtyLeft } from './lib'

export const mapLeft = <L extends ArrayLike<unknown> | unknown[], R>(
  list: L,
  callback: (
    value: L[number],
    key: number,
    list: L,
    context: {
      index: number
      break: boolean
    }
  ) => R,
  offset?: number
): R[] => {
  const res: any[] = []
  if (list.length > 0) {
    findIndexDirtyLeft(
      list,
      (v, k, a, s): any => {
        res.push(callback(v, k, a, s))
      },
      offset
    )
  }
  return res
}

export default mapLeft
