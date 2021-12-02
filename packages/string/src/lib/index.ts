/* eslint-disable security/detect-non-literal-regexp */

const caseFactory = (fn: (...a: any) => any) => (string: string): string =>
  fn.call(string)
export const toLowercase = caseFactory(''.toLocaleLowerCase || ''.toLowerCase)
export const toUppercase = caseFactory(''.toLocaleUpperCase || ''.toUpperCase)
// const lowercase = ''.toLocaleLowerCase || ''.toLowerCase
// export const toLowercase = (string: string): string => lowercase.call(string)
// const uppercase = ''.toLocaleUpperCase || ''.toUpperCase
// export const toUppercase = (string: string): string => uppercase.call(string)

// const __regPCA__ = /[\d$]/
export const __toArrayCase__ = (s: string): string[] => {
  s += '-'
  const len = s.length
  let i = -1

  let current = ''
  let words: string[] = []

  let isUL: any
  let isBreak = !isUL
  let char, charUpper, charLower
  while (++i < len) {
    char = s.charAt(i)
    charLower = toLowercase(char)
    charUpper = toUppercase(char)

    if (charUpper !== charLower || /[\d$]/.test(char)) {
      if (isBreak || !isUL !== (char === charUpper)) {
        if (current) {
          if (current.length > 1) current += '-'
          words.push(current)
        }
        current = charLower
      } else current += charLower

      isUL = isBreak || isUL || char !== charUpper
      isBreak = false
    } else {
      if (current) {
        if (current.length > 1) current = '-' + current + '-'
        words.push(current); current = '-'
      }
      // if (test(__regPCA__, char)) current += charLower
      isBreak = true
    }
  }

  words = words
    .join('')
    .split('-')
    .filter((v) => !!v)
  // console.log(s, words)

  return words
}
