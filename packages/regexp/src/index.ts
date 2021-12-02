import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'

const __string__ = (s: any): string => s.source || s
export const regexp: {
  (pattern: string | RegExp | (string | RegExp)[], flags?: string): RegExp
} = (pattern: any, flags?: string) =>
  new __RegExp__(
    pattern.map ? pattern.map(__string__).join('') : __string__(pattern),
    flags
  )

export default regexp
