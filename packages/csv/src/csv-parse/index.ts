import { pop } from '@wareset-utilites/array/pop'
import { push } from '@wareset-utilites/array/push'
import { shift } from '@wareset-utilites/array/shift'
import { unshift } from '@wareset-utilites/array/unshift'

import { trim } from '@wareset-utilites/string/trim'
import { esc } from '@wareset-utilites/escape'

import { last } from '@wareset-utilites/lang/last'
import { length } from '@wareset-utilites/lang/length'
import { includes } from '@wareset-utilites/lang/includes'

const __charAt__ = (s: string, n: number): string => s.charAt(n)

export const csvParse = (
  source: string,
  separator: ',' | ' ' | string = ',',
  quotes: '"' | '`' | "'" | '`"' | string = '"'
): string[][] => {
  const trimer = esc(quotes) + '\\s'

  let cur: string[] = []
  const res: string[][] = [cur]

  let i = -1
  const len = length(source)

  let raw = ''
  let char: string
  let isEOL: boolean
  const seps: string[] = []
  while (++i <= len) {
    char = __charAt__(source, i)
    if (char === '\\') raw += char + __charAt__(source, ++i)
    else {
      if (includes(quotes, char)) {
        seps[0] === char ? shift(seps) : unshift(seps, char)
      }

      isEOL = char === '\n'
      if ((!length(seps) && (isEOL || char === separator)) || !char) {
        raw = trim(raw, trimer)
        push(cur, raw)
        raw = ''
        if (isEOL && length(cur)) {
          if (length(cur) === 1 && !cur[0]) pop(res)
          push(res, (cur = []))
        }
      } else raw += char
    }
  }

  const lastItem = last(res)
  if (lastItem && length(lastItem) === 1 && !lastItem[0]) pop(res)

  return res
}
