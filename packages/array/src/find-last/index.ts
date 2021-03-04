import { __finder__, __IFinderCallbackSelf__ } from '../find'

export const findLast = <T>(
  list: T[],
  callback: (
    value: T,
    key: number,
    list: T[],
    self: __IFinderCallbackSelf__
  ) => boolean | any,
  // thisArg?: any,
  offset?: number,
  offsetEnd?: number
): T | undefined =>
  __finder__(list, callback, offset, offsetEnd, false, true) as T
