/* eslint-disable max-len */

export const startsWith = (string = '', search = '', position = 0): boolean =>
  !!(
    search.length &&
    string.length >= search.length &&
    string.indexOf(search, position) === position
  )
// prettier-ignore
export const endsWith = (string = '', search = '', position = string.length): boolean =>
  !!(
    search.length &&
    string.length >= search.length &&
    string.lastIndexOf(search) ===
      position - search.length + (position < 0 ? string.length : 0)
  )

const __regexp__ = (s: string): RegExp => new RegExp(s, 'g')
export const trim = (string = '', trimer = '\\s'): string => {
  return string.replace(__regexp__(`^[${trimer}]+|[${trimer}]+$`), '')
}
export const trimLeft = (string = '', trimer = '\\s'): string => {
  return string.replace(__regexp__(`^[${trimer}]+`), '')
}
export const trimRight = (string = '', trimer = '\\s'): string => {
  return string.replace(__regexp__(`[${trimer}]+$`), '')
}

export const repeat = (string = '', count = 1): string => {
  let res = ''
  count = -~count || 0
  while (count-- > 0) res += string
  return res
}
export const padStart = (string = '', length = 0, pad = ' '): string => {
  return !((length -= string.length) > 0)
    ? string
    : repeat(pad, length / pad.length).slice(0, length) + string
}
export const padEnd = (string = '', length = 0, pad = ' '): string => {
  return !((length -= string.length) > 0)
    ? string
    : string + repeat(pad, length / pad.length).slice(0, length)
}
