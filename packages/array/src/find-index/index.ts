import { __finder__, __IFinderCallbackSelf__ } from '../find'

export const findIndex = <T>(
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
): number => __finder__(list, callback, offset, offsetEnd, true) as number
