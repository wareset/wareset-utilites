import { ErrorMsg, typeOf, __ADD_SAFE__, __DEL_SAFE__ } from './lib'
import { __split__ } from './split'

type AssemblyRule = string | RegExp | null

type Settings = {
  safeSingleQuotes: boolean | number | string
  addRuleForQuotes: boolean
  strict: boolean
}

const noop = (v: string): string => v

const CREATE_SEPARATOR = (v: AssemblyRule): RegExp =>
  new RegExp(`(${(v && (v as RegExp).source) || (v ? `[${v}]` : '')})`)

const CREATE_SOURCE = (v: AssemblyRule): [number, string] => {
  if (!v) return [0, '']
  const res = (((v && (v as RegExp).source) || v || '?:') as string)
    .split('|')
    .map((v) => `(${v})`)
  return [res.length, res.join('|') + '|']
}

const CREATE_REGEXP = (v: string): RegExp => new RegExp(v.slice(0, -1), 'g')

export const split: {
  (
    str: string,
    separator?: string | RegExp,
    q1?: AssemblyRule | AssemblyRule[],
    q2?: AssemblyRule | AssemblyRule[],
    isSaveStrangeQuotes?: boolean | number | string | Settings,
    isReturnNewFn?: false
  ): string[]
  (
    str: string,
    separator: string | RegExp,
    q1: AssemblyRule | AssemblyRule[],
    q2: AssemblyRule | AssemblyRule[],
    isSaveStrangeQuotes: boolean | number | string | Settings,
    isReturnNewFn: true
  ): Function
} = (
  str: string = '',
  separator: string | RegExp = /\s*(,)\s*/,
  q1: AssemblyRule | AssemblyRule[] = null,
  q2: AssemblyRule | AssemblyRule[] = null,
  isSaveStrangeQuotes: boolean | number | string | Settings = false,
  isReturnNewFn: boolean = false
): any => {
  let strict = true
  let addRuleForQuotes = true
  let safeSingleQuotes = isSaveStrangeQuotes
  const safeSinglesFns = [noop, noop]
  if (typeOf(isSaveStrangeQuotes, 'object')) {
    strict = !!(isSaveStrangeQuotes as Settings).strict
    addRuleForQuotes = !!(isSaveStrangeQuotes as Settings).addRuleForQuotes
    safeSingleQuotes = (isSaveStrangeQuotes as Settings).safeSingleQuotes
  }

  if (safeSingleQuotes) {
    if (!typeOf(safeSingleQuotes, 'string', 'number')) {
      safeSingleQuotes = '\0\0\0'
    }
    safeSinglesFns[0] = __ADD_SAFE__(safeSingleQuotes as string)
    safeSinglesFns[1] = __DEL_SAFE__(safeSingleQuotes as string)
  }

  let REGS: any[] = [].concat(q1 as never[], q2 as never[])

  if (REGS.length > 5) ErrorMsg()
  while (REGS.length < 5) REGS.push('')
  REGS = REGS.map((v) => CREATE_SOURCE(v))
  if (addRuleForQuotes) REGS[4][1] += '(\\\\?\')|(\\\\?")|(\\\\?`)|'

  // console.log([...REGS]);

  const REGEXP = CREATE_REGEXP(REGS.map((v) => v[1] || '').join(''))
  REGS = REGS.map((v) => v[0])
  if (REGS[0] !== REGS[1] || REGS[2] !== REGS[3]) ErrorMsg(...REGS)
  REGS[4] = REGS[0] + REGS[1] + REGS[2] + REGS[3]
  REGS[3] = REGS[0] + REGS[1] + REGS[2]
  REGS[2] = REGS[0] + REGS[1]

  // console.log(REGS);
  // console.log(REGEXP);

  const res = (str: string, isStrict = strict): string[] =>
    __split__(
      str,
      CREATE_SEPARATOR(separator),
      REGS,
      REGEXP,
      safeSinglesFns,
      isStrict
    )
  return isReturnNewFn ? res : res(str, strict)
}

export default split
