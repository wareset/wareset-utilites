// import { indexOfLeft } from './indexOfLeft'

// let idx1: number
// let idx2: number
// export const spliceBetween2 = <T>(
//   source: T[],
//   val1: T,
//   val2: T,
//   ...a: T[]
// ): T[] =>
//     (idx1 = indexOfLeft(source, val1)) > -1
//     && (idx2 = indexOfLeft(source, val2, idx1 + 1)) > -1
//       ? source.splice(idx1, idx2 - --idx1, ...a)
//       : []

import { isEqual } from '@wareset-utilites/is/isEqual'

export const spliceBetween = <T>(
  source: T[],
  val1: T,
  val2: T,
  ...a: T[]
): T[] => {
  for (let i = 0; i < source.length; ++i) {
    if (isEqual(source[i], val1)) {
      for (let j = i + 1; j < source.length; ++j) {
        if (isEqual(source[j], val2)) return source.splice(i, j - --i, ...a)
      }
      break
    }
  }
  return []
}

export default spliceBetween
