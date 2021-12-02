import { findIndexDirtyRight } from './lib'

export const findIndexRight: {
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
} = findIndexDirtyRight

export default findIndexRight
