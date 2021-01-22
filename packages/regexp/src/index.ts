import { isVoid, isString, isRegExp } from '@wareset-utilites/is'
import { test, last } from '@wareset-utilites/lang'

export const regexp = (...a: Array<string | RegExp>): RegExp => {
  const flags: any =
    a.length < 2 || !isString(last(a)) || !test(/^[gim]+$/, last(a))
      ? ''
      : a.pop()
  let regexp = ''
  a.forEach(
    (v) => !isVoid(v) && (regexp += isRegExp(v) ? (v as RegExp).source : v)
  )
  return new RegExp(regexp, flags)
}

export default regexp
