import { findIndexRightDirty } from './lib'

export const filterRight: {
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
    ) => boolean,
    offset?: number
  ): T[]
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
    ) => boolean,
    offset?: number
  ): string[]
} = (
  list: any,
  callback: (value: any, key: number, list: any, context: any) => boolean,
  offset?: number
) => {
  const res: any[] = []
  findIndexRightDirty(
    list,
    (v, k, a, s): any => {
      if (callback(v, k, a, s)) res.push(a[k])
    },
    offset
  )
  return res
}

export default filterRight
