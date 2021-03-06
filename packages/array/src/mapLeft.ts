import { findIndexLeftDirty } from './lib'

export const mapLeft: {
  <T, B>(
    list: T[],
    callback: (
      value: T,
      key: number,
      list: T[],
      context: {
        index: number
        break: boolean
      }
    ) => B,
    offset?: number
  ): B[]
  <T extends string, B>(
    list: T,
    callback: (
      value: string,
      key: number,
      list: T,
      context: {
        index: number
        break: boolean
      }
    ) => B,
    offset?: number
  ): B[]
} = (
  list: any,
  callback: (value: any, key: number, list: any, context: any) => boolean,
  offset?: number
) => {
  const res: any[] = []
  findIndexLeftDirty(
    list,
    (v, k, a, s): any => {
      res.push(callback(v, k, a, s))
    },
    offset
  )
  return res
}

export default mapLeft
