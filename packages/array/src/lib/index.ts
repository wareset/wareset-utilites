export const findIndexDirtyRight = <L extends ArrayLike<unknown> | unknown[]>(
  list: L,
  callback: (
    value: L[number],
    key: number,
    list: L,
    context: {
      index: number
      break: boolean
    }
  ) => boolean,
  offset?: number
): number => {
  offset = +offset! || 0
  let res = -1
  const ctx = { index: 0, break: false }
  for (ctx.index = list.length - offset; ctx.index-- > 0;) {
    if (callback(list[ctx.index], ctx.index, list, ctx) || ctx.break) {
      if (!ctx.break) res = ctx.index
      break
    }
  }
  return res
}

export const findIndexDirtyLeft = <L extends ArrayLike<unknown> | unknown[]>(
  list: L,
  callback: (
    value: L[number],
    key: number,
    list2: L,
    context: {
      index: number
      break: boolean
    }
  ) => boolean,
  offset?: number
): number => {
  offset = +offset! || 0
  let res = -1
  const ctx = { index: 0, break: false }
  for (ctx.index = offset; ctx.index < list.length; ++ctx.index) {
    if (callback(list[ctx.index], ctx.index, list, ctx) || ctx.break) {
      if (!ctx.break) res = ctx.index
      break
    }
  }
  return res
}
