// import { indexOfLeft } from './indexOfLeft'

// let idx1: number
// export const spliceWith = <T>(
//   source: T[],
//   val1: T,
//   idx2: number,
//   ...a: T[]
// ): T[] =>
//     (idx1 = indexOfLeft(source, val1)) > -1
//       ? source.splice(idx1, idx2, ...a) : []

import { isEqual } from '@wareset-utilites/is/isEqual'

export const spliceWith = <T>(
  source: T[],
  val1: T,
  idx2: number,
  ...a: T[]
): T[] => {
  for (let i = 0; i < source.length; ++i) {
    if (isEqual(source[i], val1)) return source.splice(i, idx2, ...a)
  }
  return []
}
export default spliceWith
