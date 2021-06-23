/* eslint-disable no-extra-boolean-cast */

let undef: undefined
export const UNDEFINED = undef

export const isset = (a: any, b: any): boolean => (a !== a ? b !== b : a === b)

type TypeFindIndex = {
  <T>(
    list: T[],
    callback: (
      value: T,
      key: number,
      list: T[],
      context: {
        index: number
        break: boolean
      }
    ) => boolean,
    offset?: number
  ): number
  <T extends string>(
    list: T,
    callback: (
      value: string,
      key: number,
      list: T,
      context: {
        index: number
        break: boolean
      }
    ) => boolean,
    offset?: number
  ): number
}

const i = 'index'
const b = 'break'
export const findIndexLeftDirty: TypeFindIndex = (
  list: any,
  callback: (value: any, key: number, list: any, context: any) => boolean,
  offset?: number
) => {
  offset = +offset! || 0
  // let i: number
  let res = -1
  const ctx = { index: 0, break: false }
  for (ctx[i] = offset - 1; ++ctx[i] < list.length; ) {
    if (callback(list[ctx[i]], ctx[i], list, ctx) || ctx[b]) {
      if (!ctx[b]) res = ctx[i]
      break
    }
  }
  return res
}

export const findIndexRightDirty: TypeFindIndex = (
  list: any,
  callback: (value: any, key: number, list: any, context: any) => boolean,
  offset?: number
) => {
  offset = +offset! || 0
  // let i: number
  let res = -1
  const ctx = { index: 0, break: false }
  for (ctx[i] = list.length - offset; ctx[i]-- > 0; ) {
    if (callback(list[ctx[i]], ctx[i], list, ctx) || ctx[b]) {
      if (!ctx[b]) res = ctx[i]
      break
    }
  }
  return res
}
