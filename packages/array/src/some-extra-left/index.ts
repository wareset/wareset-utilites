import { __finder__, __IFinderCallbackSelf__ } from '../lib'

export const someExtraLeft = <T>(
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
): boolean => !!~(__finder__(list, callback, offset, offsetEnd, true) as number)