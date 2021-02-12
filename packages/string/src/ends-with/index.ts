/* eslint-disable max-len */
import { lastIndexOf } from '@wareset-utilites/lang/last-index-of'
import { length } from '@wareset-utilites/lang/length'

let __searchlen__: number
let __stringlen__: number
// prettier-ignore
export const endsWith = (string: string, search: string, position = length(string)): boolean =>
  !!(
    (__searchlen__ = length(search)) &&
    (__stringlen__ = length(string)) >= __searchlen__ &&
    lastIndexOf(string, search) ===
      position - __searchlen__ + (position < 0 ? __stringlen__ : 0)
  )
