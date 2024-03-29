import { last } from '@wareset-utilites/array/last'
import { trim } from '@wareset-utilites/string/trim'
import { esc } from '@wareset-utilites/escape'

export const csvParse = (
  source: string,
  separator: ',' | ' ' | string = ',',
  quotes: '"' | '`' | "'" | '`"' | string = '"'
): string[][] => {
  const trimer = esc(quotes) + '\\s'

  let cur: string[] = []
  const res: string[][] = [cur]

  let i = -1
  const len = source.length

  let raw = ''
  let char: string
  let isEOL: boolean
  const seps: string[] = []
  while (++i <= len) {
    char = source.charAt(i)
    if (char === '\\') raw += char + source.charAt(++i)
    else {
      if (quotes.indexOf(char) > -1) {
        if (seps[0] === char) seps.shift()
        else seps.unshift(char)
      }

      isEOL = char === '\n'
      if (!seps.length && (isEOL || char === separator) || !char) {
        raw = trim(raw, trimer)
        cur.push(raw)
        raw = ''
        if (isEOL && cur.length) {
          if (cur.length === 1 && !cur[0]) res.pop()
          res.push(cur = [])
        }
      } else raw += char
    }
  }

  const lastItem = last(res)
  if (lastItem && lastItem.length === 1 && !lastItem[0]) res.pop()

  return res
}

export default csvParse
