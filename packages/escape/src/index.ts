/* eslint-disable max-len */
/* eslint-disable security/detect-non-literal-regexp */

import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'

export const esc = ((): {
  (string: string, ignore?: string): string
  (string: string, ignore: string, isNewFn: false): string
  (string: string, ignore: string, isNewFn: true): { (string: string): string }
} => {
  const regexpG = (s: string): RegExp => new __RegExp__(s, 'g')

  const START = '['
  const MIDDLE = '-.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/'
  const END = ']'
  const DEFAULT_REGEXP = regexpG(START + MIDDLE + END)
  const REPLACER = '\\$&'

  return (string: string, ignore?: string, isNewFn?: boolean): any => {
    ignore = ignore || ''
    let res: any
    if (!ignore && !isNewFn) res = string.replace(DEFAULT_REGEXP, REPLACER)
    else {
      // prettier-ignore
      const newMIDDLE = MIDDLE.replace(regexpG(START + esc(ignore) + END), '')
      const newREGEXP = regexpG(START + newMIDDLE + END)

      const newEscape = (string: string): string =>
        string.replace(newREGEXP, REPLACER)
      res = isNewFn ? newEscape : newEscape(string as string)
    }
    return res
  }
})()

export default esc
