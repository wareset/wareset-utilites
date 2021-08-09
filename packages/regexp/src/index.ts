/* eslint-disable security/detect-non-literal-regexp */

import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'

export const regexp: {
  (pattern: string | RegExp | (string | RegExp)[], flags?: string): RegExp
} = (pattern: any, flags?: string) =>
  new __RegExp__(
    pattern.map
      ? pattern.map((v: any) => v.source || v).join('')
      : pattern.source || pattern,
    flags
  )

export default regexp
