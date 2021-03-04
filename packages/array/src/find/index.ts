import { length } from '@wareset-utilites/lang/length'
import { abs } from '@wareset-utilites/math'

export interface __IFinderCallbackSelf__ {
  index: (num: number) => number
  offset: (nym: number) => number
  stop: () => true
}

export const __finder__ = <T>(
  list: T[],
  callback: (
    value: T,
    key: number,
    list: T[],
    self: __IFinderCallbackSelf__
  ) => boolean | any,
  // eslint-disable-next-line no-invalid-this
  // thisArg: any = this,
  offset?: number,
  offsetEnd?: number,
  returnIndex = false,
  fromTheEnd = false
): T | undefined | number =>
  (((): any => {
    // callback = callback.bind(thisArg)
    offset = abs(offset!) || 0
    offsetEnd = abs(offsetEnd!) || 0
    // let i = length(list)
    // let lastI: any = null

    // const runer = (): any =>
    //   lastI === null || lastI === thisArg || fromTheEnd === lastI > thisArg

    // while (
    //   i-- >= 0 &&
    //   (thisArg = fromTheEnd ? i : length(list) - i - 1) >= 0 &&
    //   (thisArg < length(list) || (thisArg = -1) > 0) &&
    //   (!runer() || !callback(list[(lastI = thisArg)], thisArg, list))
    // );

    offset = fromTheEnd ? length(list) - offset : -1 + offset
    let isStoped = false

    const self = {
      index: (num: number): number => (offset = num),
      offset: (num: number): number => (offset! += num),
      stop: (): true => (isStoped = true)
    }

    while (
      !isStoped &&
      (fromTheEnd
        ? offset-- > offsetEnd
        : ++offset < length(list) - offsetEnd || (offset = -1) > 0) &&
      !callback(list[offset], offset, list, self)
    );
  })() || returnIndex
    ? offset
    : list[offset]) as T

export const find = <T>(
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
): T | undefined => __finder__(list, callback, offset, offsetEnd) as T
