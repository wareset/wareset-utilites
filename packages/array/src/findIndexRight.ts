import { findIndexRightDirty } from './lib'

export const findIndexRight: {
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
  ): number
  <T extends string>(
    list: T,
    callback: (value: string, key: number, list: T, context: any) => boolean,
    offset?: number
  ): number
} = findIndexRightDirty

export default findIndexRight
