import { keys } from '../keys'

export const entries = <T>(
  object: { [s: string]: T } | ArrayLike<T>
): [string, T][] => keys(object).map((k) => [k, (object as any)[k]])
