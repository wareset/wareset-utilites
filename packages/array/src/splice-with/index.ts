import { indexOf } from '@wareset-utilites/lang/index-of'
import { splice } from '../splice'

let idx1: number
export const spliceWith = <T>(
  source: T[],
  val1: T,
  idx2: number,
  ...a: T[]
): T[] =>
    ~(idx1 = indexOf(source, val1)) ? splice(source, idx1, idx2, ...a) : []
