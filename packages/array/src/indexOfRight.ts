/* eslint-disable max-len */
import { findIndexRightDirty, isset } from './lib'

export const indexOfRight: {
  <T>(v: T[], value: T, offset?: number): number
  (v: string, value: string, offset?: number): number
} = (source: any, value: any, offset?: number) =>
  findIndexRightDirty(source, (v) => isset(v, value), offset)

export default indexOfRight
