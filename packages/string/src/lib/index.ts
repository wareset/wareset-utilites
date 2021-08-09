/* eslint-disable security/detect-non-literal-regexp */

import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'

export const $EMPTY = ''
export const $DASH = '-'
export const $SPACE = ' '
export const $UNDERSCORE = '_'

export const __trimer__ = '\\s'
export const __regexp__ = (s: string): RegExp => new __RegExp__(s, 'g')

const lowercase = $EMPTY.toLocaleLowerCase || $EMPTY.toLowerCase
export const toLowercase = (string: string): string => lowercase.call(string)

const uppercase = $EMPTY.toLocaleUpperCase || $EMPTY.toUpperCase
export const toUppercase = (string: string): string => uppercase.call(string)

const __regPCA__ = /[\d$]/
export const __toArrayCase__ = (s: string): string[] => {
  s += $DASH
  const len = s.length
  let i = -1

  let current = $EMPTY
  let words: string[] = []

  let isUL: any
  let isBreak = !isUL
  let char, charUpper, charLower
  while (++i < len) {
    char = s.charAt(i)
    charLower = toLowercase(char)
    charUpper = toUppercase(char)

    if (charUpper !== charLower || __regPCA__.test(char)) {
      if (isBreak || !isUL !== (char === charUpper)) {
        if (current) {
          if (current.length > 1) current += $DASH
          words.push(current)
        }
        current = charLower
      } else current += charLower

      isUL = isBreak || isUL || char !== charUpper
      isBreak = false
    } else {
      if (current) {
        if (current.length > 1) current = $DASH + current + $DASH
        words.push(current), (current = $DASH)
      }
      // if (test(__regPCA__, char)) current += charLower
      isBreak = true
    }
  }

  words = words
    .join($EMPTY)
    .split($DASH)
    .filter((v) => !!v)
  // console.log(s, words)

  return words
}
