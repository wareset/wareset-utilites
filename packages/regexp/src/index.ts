/* eslint-disable security/detect-non-literal-regexp */

export const regexp: {
  (pattern: string | RegExp | (string | RegExp)[], flags?: string): RegExp
} = (pattern: any, flags?: string) =>
  new RegExp(
    pattern.map
      ? pattern.map((v: any) => v.source || v).join('')
      : pattern.source || pattern,
    flags
  )

export default regexp
