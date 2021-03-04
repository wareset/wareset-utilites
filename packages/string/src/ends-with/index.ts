/* eslint-disable max-len */
import { lastIndexOf } from '@wareset-utilites/lang/last-index-of'
import { length } from '@wareset-utilites/lang/length'
import { abs } from '@wareset-utilites/math'

let __searchlen__: number
let __stringlen__: number
// prettier-ignore
export const endsWith = (string: string, search: string, position = 0): boolean =>
  !!(
    (__searchlen__ = length(search)) &&
    (__stringlen__ = length(string)) >= __searchlen__ &&
    lastIndexOf(string, search,
      (__stringlen__ -= abs(position))) === __stringlen__ - __searchlen__
  )
