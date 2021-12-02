import { findIndexDirtyLeft } from './lib'

export const findIndexLeft: {
  <L extends ArrayLike<unknown> | unknown[]>(
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
  ): number
} = findIndexDirtyLeft

export default findIndexLeft
