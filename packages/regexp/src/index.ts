import { test } from '@wareset-utilites/lang/test'
import { last } from '@wareset-utilites/lang/last'
import { length } from '@wareset-utilites/lang/length'
import { join } from '@wareset-utilites/array/join'

let flags: any
export const regexp = (...a: (string | RegExp)[]): RegExp => (
  (flags =
    length(a) < 2 || (last(a) as RegExp).source || !test(/^[gim]+$/, last(a))
      ? ''
      : a.pop()),
  new RegExp(join(a.map((v) => (v as RegExp).source || v)), flags)
)

export default regexp
