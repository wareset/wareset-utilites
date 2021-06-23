/* eslint-disable max-len */
import { findIndexLeftDirty } from './lib'
import { UNDEFINED } from './lib'

export const findLeft: {
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
  ): T | undefined
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
  ): string | undefined
} = (
  list: any,
  callback: (value: any, key: number, list: any, context: any) => boolean,
  offset?: number
) =>
  (offset = findIndexLeftDirty(list, callback, offset)) > -1
    ? list[offset]
    : UNDEFINED

export default findLeft
