import { indexOf } from '@wareset-utilites/lang/index-of'
import { includes } from '@wareset-utilites/lang/includes'
import { isBe } from '@wareset-utilites/is/is-be'
import { isFunction } from '@wareset-utilites/is/is-function'

// prettier-ignore
export const unique = <T>(
  list: T[],
  filter: any[] | ((v: T, k: number, a: T[]) => boolean) = isBe,
  __tmp?: any
): T[] => (
    (__tmp = isFunction(filter)
      ? filter
      : (v: T): boolean => !includes(filter as any, v)),
    list.filter((v, k, a) => indexOf(a, v) === k && __tmp(v, k, a))
  )

export default unique
