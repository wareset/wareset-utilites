import { findIndexLeftDirty } from './lib'

export const forEachLeft: {
  <T>(
    list: T[],
    callback: (
      value: T,
      key: number,
      list: T[],
      context: {
        index: number
        break: boolean
      }
    ) => any,
    offset?: number
  ): void
  <T extends string>(
    list: T,
    callback: (
      value: string,
      key: number,
      list: T,
      context: {
        index: number
        break: boolean
      }
    ) => any,
    offset?: number
  ): void
} = (
  list: any,
  callback: (value: any, key: number, list: any, context: any) => any,
  offset?: number
) => {
  findIndexLeftDirty(
    list,
    (v, k, a, s): any => {
      callback(v, k, a, s)
    },
    offset
  )
}

export default forEachLeft
