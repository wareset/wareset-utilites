/* eslint-disable max-len */
import { findIndexLeftDirty, isset } from './lib'

export const indexOfLeft: {
  <T>(v: T[], value: T, offset?: number): number
  (v: string, value: string, offset?: number): number
} = (source: any, value: any, offset?: number) =>
  value === value
    ? source.indexOf(value, offset)
    : findIndexLeftDirty(source, (v) => isset(v, value), offset)

export default indexOfLeft
