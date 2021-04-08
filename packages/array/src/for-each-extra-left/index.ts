import { __finder__, __IFinderCallbackSelf__ } from '../lib'

// prettier-ignore
export const forEachExtraLeft = <T>(
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
): undefined => (
    __finder__(
      list,
      (...a) => {
        callback(...a)
      },
      // thisArg,
      offset,
      offsetEnd
    ),
    undefined
  )
