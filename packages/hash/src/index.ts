import { replace } from '@wareset-utilites/string/replace'
import { length } from '@wareset-utilites/lang/length'
import { slice } from '@wareset-utilites/lang/slice'

// export const hash = (string) => {
//   string = ('' + string).replace(/\r/g, '')
//   let hash = 999999999999989 // 604661760000000;
//   let i = string.length
//   while (i--) hash += (hash << 33) * string.charCodeAt(i)
//   return (hash < 0 ? -hash : hash).toString(36)
// }

// export const hash = (string: string, maxLength = 8): string => {
//   string = replace('' + string, /\r/g)
//   let hash: any = -60466176001 // 999999999999989 // 604661760000000;
//   let i = length(string)
//   while (i--) hash -= ~((hash << 33) * string.charCodeAt(i))
//   hash = (hash < 0 ? -hash : hash).toString(36)
//   return maxLength ? slice(hash + hash, 0, maxLength) : hash
// }

// const tostr = (n: number): string => n.toString(36)
// export const hash = (str: any, maxLength = 8, salt: any = ''): string => {
//   str = replace('' + salt + str, /\r/g)
//   let hash = 60466176
//   const len = length(str)
//   let i = len
//   while (i--) hash = (hash << 5) - hash + str.charCodeAt(i)
//   const res = tostr((hash >>> 0) + len) + tostr(-hash >>> 0)
//   return maxLength ? slice(res, 0, maxLength) : res
// }

const tostr = (n: number): string => n.toString(36)
export const hash = (str: any, maxLength = 8, salt: any = ''): string => {
  str = replace('' + salt + str, /\r/g)
  let i = length(str)
  let hash = 60466176 + i
  while (i--) hash = (hash << 5) - hash + str.charCodeAt(i)
  const res = tostr(hash >>> 0) + tostr(-hash >>> 0)
  return maxLength ? slice(res, 0, maxLength) : res
}

export default hash
