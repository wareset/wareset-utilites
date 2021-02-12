import { keys } from '../keys'

export const entries = (value: any): [string, any][] =>
  keys(value).map((k) => [k, value[k]])
