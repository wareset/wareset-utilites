/* eslint-disable security/detect-non-literal-regexp */

import { test } from '@wareset-utilites/lang/test'
import { length } from '@wareset-utilites/lang/length'

import { push } from '@wareset-utilites/array/push'
import { join } from '@wareset-utilites/array/join'
import { filter } from '@wareset-utilites/array/filter'

export const __dash__ = '-'
export const __empty__ = ''
export const __space__ = ' '
export const __underline__ = '_'

export const __trimer__ = '\\s'
export const __regexp__ = (s: string): RegExp => new RegExp(s, 'g')

const lowercase = __empty__.toLocaleLowerCase || __empty__.toLowerCase
export const toLowercase = (string: string): string => lowercase.call(string)

const uppercase = __empty__.toLocaleUpperCase || __empty__.toUpperCase
export const toUppercase = (string: string): string => uppercase.call(string)

const __regPCA__ = /[\d$]/
export const __toArrayCase__ = (s: string): string[] => {
  s += __dash__
  const len = length(s)
  let i = -1

  let current = __empty__
  let words: string[] = []

  let isUL: any
  let isBreak = !isUL
  let char, charUpper, charLower
  while (++i < len) {
    char = s.charAt(i)
    charLower = toLowercase(char)
    charUpper = toUppercase(char)

    if (charUpper !== charLower || test(__regPCA__, char)) {
      if (isBreak || !isUL !== (char === charUpper)) {
        if (current) {
          if (length(current) > 1) current += __dash__
          push(words, current)
        }
        current = charLower
      } else current += charLower

      isUL = isBreak || isUL || char !== charUpper
      isBreak = false
    } else {
      if (current) {
        if (length(current) > 1) current = __dash__ + current + __dash__
        push(words, current), (current = __dash__)
      }
      // if (test(__regPCA__, char)) current += charLower
      isBreak = true
    }
  }

  words = filter(join(words, __empty__).split(__dash__), (v) => !!v)
  // console.log(s, words)

  return words
}
