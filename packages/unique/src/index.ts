// function globals() {
//   return typeof globalThis !== 'undefined'
//     ? globalThis
//     : typeof global !== 'undefined'
//     ? global
//     : this
// }
// const __global__ = globals()

// function _filter(v, k, a) {
//   for (const val of this) {
//     if (v === val) return false
//     if (val instanceof RegExp && val.test('' + v)) return false
//   }
//   return a.indexOf(v) === k
// }

// const DEFAULT_PATTERN = ['', null, undefined]

// export default function unique(arr, k, a) {
//   let self = this
//   if (this === __global__ || !Array.isArray(this)) self = DEFAULT_PATTERN
//   const fn = _filter.bind(self)
//   return a ? fn(arr, k, a) : arr.filter(fn)
// }

// import { indexOf, includes } from '@wareset-utilites/lang'

import { indexOf } from '@wareset-utilites/array'
import { includes } from '@wareset-utilites/array/includes'

export const unique = <T>(
  list: T[],
  filter: any[] = ['', NaN, null, undefined]
): T[] => list.filter((v, k, a) => indexOf(a, v) === k && !includes(filter, v))

export default unique
