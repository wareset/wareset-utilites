/* eslint-disable no-invalid-this */

import { isArray } from '@wareset-utilites/is/isArray'
import { isEqual } from '@wareset-utilites/is/isEqual'

// typeof Set !== '' + void 0
//   ? (list: any, filterFunctionOrArray: any): any => {
//     let res: any[] = []
//     if (isArray(filterFunctionOrArray)) {
//       filterFunctionOrArray = [...new Set(filterFunctionOrArray)]
//       res = [...new Set([...filterFunctionOrArray, ...list])].slice(
//         filterFunctionOrArray.length
//       )
//     } else {
//       res = [...new Set(list)]
//       if (filterFunctionOrArray) res = res.filter(filterFunctionOrArray)
//     }
//     return res
//   }
//   :

const __filter__ = (v: any, k: number, a: any[]): boolean => {
  if (v === v) return a.indexOf(v) === k
  for (let i = 0; i < a.length; ++i) if (a[i] !== a[i]) return i === k
  return true
}
const __equal__ = function(this: any, v: any): boolean {
  return isEqual(this, v)
}
const __filterArr__ = function(this: any[], v: any, k: number, a: any[]): any {
  return !this.some(__equal__, v) && __filter__(v, k, a)
}
const __filterFn__ = function(this: any, v: any, k: number, a: any[]): any {
  return __filter__(v, k, a) && this(v, k, a)
}

export const unique: {
  <L extends ArrayLike<unknown> | unknown[]>(
    list: L,
    filterFunctionOrArray?:
      | any[]
      | ((value: L[number], key: number, list: L) => boolean)
  ): L[number][]
} = (list: any, filterFunctionOrArray: any): any =>
  list.filter(isArray(filterFunctionOrArray)
    ? __filterArr__
    : filterFunctionOrArray
      ? __filterFn__
      : __filter__, filterFunctionOrArray)

export default unique
