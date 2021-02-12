/* eslint-disable max-len */
import { indexOf } from '@wareset-utilites/lang/index-of'
import { length } from '@wareset-utilites/lang/length'

let __searchlen__: number
// prettier-ignore
export const startsWith = (string: string, search: string, position = 0): boolean =>
  !!((position < 0 && (position = -position)),
  (__searchlen__ = length(search)) &&
    length(string) >= __searchlen__ &&
    indexOf(string, search, position) === position
  )
