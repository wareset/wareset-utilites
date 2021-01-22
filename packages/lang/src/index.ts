export const noop = (..._: any[]): void => {}

export const typeOf = (value: any, type: string): boolean =>
  typeof value === type
export const instanceOf = (value: any, type: any): boolean =>
  value instanceof type

export const size = (
  v: any[] | string | Map<any, any> | Set<any> | any
): number =>
  v.length != null ? v.length : v.size != null ? v.size : size(Object.keys(v))

export const first: {
  (v: any[]): any
  (v: string): string
} = (v: any[] | string): any => v[0]
export const last: {
  (v: any[]): any
  (v: string): string
} = (v: any[] | string): any => v[v.length - 1]

export const indexOf = (source: any[] | string, value: any, key = 0): number =>
  source.indexOf(value, key)

export const includes = (source: any[] | string, value: any): boolean =>
  indexOf(source, value) >= 0

export const test = (regexp: RegExp, value: any): boolean => regexp.test(value)

export const splice = (
  source: any[],
  n1: number,
  n2: number = 1,
  ...a: any[]
): any[] => (source.splice(n1, n2, ...a) ? source : source)

export const slice: {
  (source: any[], n1: number, n2?: number): any[]
  (source: string, n1: number, n2?: number): string
} = (source: any[] | string, n1: number, n2?: number): any =>
  source.slice(n1, n2)

export const replace = (
  string: string,
  regexp: RegExp,
  replacer = ''
): string => string.replace(regexp, replacer)
