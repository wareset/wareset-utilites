import { indexOf } from '@wareset-utilites/lang/index-of'
import { splice } from '../splice'

let idx1: number
let idx2: number
// prettier-ignore
export const spliceBetween = <T>(
  source: T[],
  val1: T,
  val2: T,
  ...a: T[]
): T[] =>
    ~(idx1 = indexOf(source, val1)) && (idx2 = indexOf(source, val2)) >= idx1
      ? splice(source, idx1, idx2 - --idx1, ...a)
      : []
