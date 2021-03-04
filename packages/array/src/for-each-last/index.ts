import { __finder__, __IFinderCallbackSelf__ } from '../find'

export const forEachLast = <T>(
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
): undefined =>
  // (callback = callback.bind(thisArg)),
  __finder__(
    list,
    (...a) => {
      callback(...a)
    },
    // thisArg,
    offset,
    offsetEnd,
    false,
    true
  ) as undefined
