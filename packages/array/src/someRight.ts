import { findIndexRightDirty } from './lib'

export const someRight: {
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
  ): boolean
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
  ): boolean
} = (
  list: any,
  callback: (value: any, key: number, list: any, context: any) => boolean,
  offset?: number
) => findIndexRightDirty(list, callback, offset) > -1

export default someRight
