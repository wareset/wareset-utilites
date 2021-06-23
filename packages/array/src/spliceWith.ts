import indexOf from './indexOfLeft'

let idx1: number
// prettier-ignore
export const spliceWith = <T>(
  source: T[],
  val1: T,
  idx2: number,
  ...a: T[]
): T[] =>
    (idx1 = indexOf(source, val1)) > -1 ? source.splice(idx1, idx2, ...a) : []
export default spliceWith
