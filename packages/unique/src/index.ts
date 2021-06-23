import indexOfLeft from '@wareset-utilites/array/indexOfLeft'
import filterLeft from '@wareset-utilites/array/filterLeft'
import includes from '@wareset-utilites/array/includes'
import isBe from '@wareset-utilites/is/isBe'
import isFunction from '@wareset-utilites/is/isFunction'

// prettier-ignore
export const unique = <T>(
  list: T[],
  filterFn: any[] | ((v: T, k: number, a: T[]) => boolean) = isBe,
  __tmp?: any
): T[] => (
    (__tmp = isFunction(filterFn)
      ? filterFn
      : (v: T): boolean => !includes(filterFn as any, v)),
    filterLeft(list, (v, k) => indexOfLeft(list, v) === k && __tmp(v, k, list))
  )

export default unique
