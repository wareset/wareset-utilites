import { keys } from '../keys'

export const values = <T>(object: { [s: string]: T } | ArrayLike<T>): T[] =>
  keys(object).map((k) => (object as any)[k])
