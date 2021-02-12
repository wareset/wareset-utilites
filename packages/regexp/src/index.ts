import { test } from '@wareset-utilites/lang/test'
import { last } from '@wareset-utilites/lang/last'
import { length } from '@wareset-utilites/lang/length'

let flags: any
export const regexp = (...a: Array<string | RegExp>): RegExp => (
  (flags =
    length(a) < 2 || (last(a) as RegExp).source || !test(/^[gim]+$/, last(a))
      ? ''
      : a.pop()),
  new RegExp(a.map((v) => (v as RegExp).source || v).join(''), flags)
)

export default regexp
