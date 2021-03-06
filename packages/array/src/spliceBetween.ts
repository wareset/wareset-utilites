/* eslint-disable max-len */
import indexOf from './indexOfLeft'

let idx1: number
let idx2: number
// prettier-ignore
export const spliceBetween = <T>(
  source: T[],
  val1: T,
  val2: T,
  ...a: T[]
): T[] =>
    (idx1 = indexOf(source, val1)) > -1 && (idx2 = indexOf(source, val2, idx1 + 1)) > -1
      ? source.splice(idx1, idx2 - --idx1, ...a)
      : []
export default spliceBetween
