/* eslint-disable max-len */
import { size, indexOf, slice, replace } from '@wareset-utilites/lang'

export const startsWith = (string = '', search = '', position = 0): boolean =>
  !!(
    size(search) &&
    size(string) >= size(search) &&
    indexOf(string, search, position) === position
  )
// prettier-ignore
export const endsWith = (string = '', search = '', position = size(string)): boolean =>
  !!(
    size(search) &&
    size(string) >= size(search) &&
    string.lastIndexOf(search) ===
      position - size(search) + (position < 0 ? size(string) : 0)
  )

const __regexp__ = (s: string): RegExp => new RegExp(s, 'g')
export const trim = (string = '', trimer = '\\s'): string =>
  replace(string, __regexp__(`^[${trimer}]+|[${trimer}]+$`))

export const trimLeft = (string = '', trimer = '\\s'): string =>
  replace(string, __regexp__(`^[${trimer}]+`))

export const trimRight = (string = '', trimer = '\\s'): string =>
  replace(string, __regexp__(`[${trimer}]+$`))

export const repeat = (string = '', count = 1): string => {
  let res = ''
  count = -~count || 0
  while (count-- > 0) res += string
  return res
}
export const padStart = (string = '', length = 0, pad = ' '): string =>
  !((length -= size(string)) > 0)
    ? string
    : slice(repeat(pad, length / size(pad)), 0, length) + string

export const padEnd = (string = '', length = 0, pad = ' '): string =>
  !((length -= size(string)) > 0)
    ? string
    : string + slice(repeat(pad, length / size(pad)), 0, length)
