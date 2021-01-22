export const esc = ((): {
  (string: string, ignore?: string): string
  (string: string, ignore: string, isNewFn: false): string
  (string: string, ignore: string, isNewFn: true): Function
} => {
  const regexpG = (s: string): RegExp => new RegExp(s, 'g')
  const replace = (string: string, regexp: RegExp, replacer: string): string =>
    string.replace(regexp, replacer)

  const START = '['
  const MIDDLE = '.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/'
  const END = '-]'
  const DEFAULT_REGEXP = regexpG(START + MIDDLE + END)
  const REPLACER = '\\$&'

  return (
    string: string,
    ignore: string = '',
    isNewFn: boolean = false
  ): any => {
    if (!ignore && !isNewFn) return replace(string, DEFAULT_REGEXP, REPLACER)

    const newMIDDLE = replace(MIDDLE, regexpG(START + esc(ignore) + END), '')
    const newREGEXP = regexpG(START + newMIDDLE + END)

    const newEscape = (string: string): string =>
      replace(string, newREGEXP, REPLACER)
    return isNewFn ? newEscape : newEscape(string as string)
  }
})()

export default esc
