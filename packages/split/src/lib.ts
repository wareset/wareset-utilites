const errorName = 'ERROR @w/split'
export const ErrorMsg = (...a: any[]): void => {
  throw new Error(JSON.stringify([errorName, ...a]))
}

export const typeOf = (v: any, ...types: string[]): boolean =>
  types.some((type) => typeof v === type)

const QUOTES = '\'"`'
const REG_ADD_SAFE = new RegExp(`(\\w)([${QUOTES}])(\\w)`, 'g')
export const __ADD_SAFE__ = (safer: number | string) => (v: string): string =>
  `${v}`.replace(REG_ADD_SAFE, `$1$2${safer}$2$3`)

export const __DEL_SAFE__ = (safer: number | string): any => {
  const regexp = new RegExp(`[${QUOTES}]${safer}|${safer}[${QUOTES}]`, 'g')
  return (v: string): string => v.replace(regexp, '')
}
