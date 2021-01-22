import { ErrorMsg } from './lib'

export const __split__ = (
  str: string,
  separator: RegExp,
  REGS: number[],
  REGEXP: RegExp,
  safeSinglesFns: Function[],
  isStrict: boolean
): string[] => {
  const step = (str.match(separator) || []).length
  if (!step) return [str]

  const res = []

  str = safeSinglesFns[0](str)

  const data = str.split(separator)
  // console.log(str);
  // console.log(data)

  const l4: number = REGS[4]
  const l3: number = REGS[3]
  const l2: number = REGS[2]
  const l1: number = REGS[1]
  const l5: number = l2 - l3
  // return;

  let i, column, index, pusher
  for (i = 0; i < data.length; i += step) {
    pusher = ''

    let isQuote: boolean | number = false
    const matches: number[] = []
    let isComment: boolean | number = false

    do {
      // matches = [];
      column = data[i]
      pusher += column

      column.replace(REGEXP, (...a: any[]): any => {
        a.slice(1, -2).forEach((v, k /* , a*/) => {
          // console.log(a)
          if (v === undefined || v[0] === '\\') return

          if (k >= l3 && k < l4) {
            // console.log(1212, isComment, k, REGS)
            isComment === k + l5 && (isComment = false)
          } else if (isQuote === false && isComment === false) {
            if (k >= l4) (isQuote = k), matches.push(k)
            else if (k >= l2) isComment = k
            else if (k < l1) matches.push(k)
            else if ((index = matches.indexOf(k - l1)) > -1) {
              matches.splice(index, 1)
            }
          } else if (k === isQuote) matches.pop(), (isQuote = false)
        })
      })

      // console.log(pusher, [...matches]);
      if (isComment !== false || matches.length) {
        ;(pusher += data[i + 1] || ''), (i += step)
        if (i >= data.length) {
          if (isStrict) ErrorMsg(pusher, [...matches])
          break
        }
      }
    } while (isComment !== false || matches.length)

    res.push(safeSinglesFns[1](pusher))
  }

  return res
}
