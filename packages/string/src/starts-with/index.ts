/* eslint-disable max-len */
import { indexOf } from '@wareset-utilites/lang/index-of'
import { length } from '@wareset-utilites/lang/length'
import { abs } from '@wareset-utilites/math'

let __searchlen__: number
// prettier-ignore
export const startsWith = (string: string, search: string, position = 0): boolean =>
  !!(
    (__searchlen__ = length(search)) &&
    length(string) >= __searchlen__ &&
    indexOf(string, search, position = abs(position)) === position
  )
