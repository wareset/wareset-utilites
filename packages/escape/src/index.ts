import { replace } from '@wareset-utilites/lang/replace'

export const esc = ((): {
  (string: string, ignore?: string): string
  (string: string, ignore: string, isNewFn: false): string
  (string: string, ignore: string, isNewFn: true): { (string: string): string }
} => {
  const regexpG = (s: string): RegExp => new RegExp(s, 'g')
  // const replace = (string: string, regexp: RegExp, replacer: string): string =>
  //   string.replace(regexp, replacer)

  const START = '['
  const MIDDLE = '-.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/'
  const END = ']'
  const DEFAULT_REGEXP = regexpG(START + MIDDLE + END)
  const REPLACER = '\\$&'

  return (string: string, ignore: string = '', isNewFn?: boolean): any => {
    let res: any
    if (!ignore && !isNewFn) res = replace(string, DEFAULT_REGEXP, REPLACER)
    else {
      const newMIDDLE = replace(MIDDLE, regexpG(START + esc(ignore) + END))
      const newREGEXP = regexpG(START + newMIDDLE + END)

      const newEscape = (string: string): string =>
        replace(string, newREGEXP, REPLACER)
      res = isNewFn ? newEscape : newEscape(string as string)
    }
    return res
  }
})()

export default esc
