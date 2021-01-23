import { test, last } from '@wareset-utilites/lang'

export const regexp = (...a: Array<string | RegExp>): RegExp => {
  const flags: any =
    a.length < 2 || last(a).source || !test(/^[gim]+$/, last(a)) ? '' : a.pop()
  return new RegExp(a.map((v) => (v as RegExp).source || v).join(''), flags)
}

export default regexp
