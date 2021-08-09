/* eslint-disable max-len */

import { isNumber } from '@wareset-utilites/is/isNumber'
import { isObject } from '@wareset-utilites/is/isObject'
import { isFunction } from '@wareset-utilites/is/isFunction'
import { isNativeFunction } from '@wareset-utilites/is/isNativeFunction'

import { instanceOf } from '@wareset-utilites/lang/instanceOf'

import { typed, typedOf } from '@wareset-utilites/typed'

import { is } from '@wareset-utilites/object/is'
import { Object as __Object__ } from '@wareset-utilites/object/Object'
import { getOwnPropertyNames } from '@wareset-utilites/object/getOwnPropertyNames'
import { getOwnPropertySymbols } from '@wareset-utilites/object/getOwnPropertySymbols'

const prototype = 'prototype'
const valueOf = 'valueOf'
const toString = 'toString'

const getProtoOwnPropNames = (
  a: any,
  keys: string[],
  natives: boolean | undefined
): void => {
  ;(typedOf(a) as Function[]).forEach((p) => {
    if (p && (natives || !isNativeFunction(p))) {
      keys.push(...getOwnPropertyNames(p[prototype]))
    }
  })
}

export type TypeDeepEqualOptions = {
  depth?: number | boolean
  symbols?: boolean
  immerse?: boolean
  noweaks?: boolean
  natives?: boolean
}

const OPTIONS: TypeDeepEqualOptions = {
  depth: true,
  symbols: true,
  immerse: true,
  noweaks: false,
  natives: false
}

const __ArrayBuffer__ = ArrayBuffer
const __DataView__ = DataView
const __Float64Array__ = Float64Array

const __deepEqual__ = (
  a: any,
  b: any,
  depth: boolean | number | undefined,
  options: TypeDeepEqualOptions = OPTIONS,
  __cache__: Map<any, any>
): boolean => {
  if (is(a, b)) return true
  if (!(+depth! > 0) || !isObject(a) || !isObject(b)) return false

  const proto = typed(a)
  if (proto !== typed(b)) return false

  if (!__cache__.has(a)) __cache__.set(a, b)
  else if (__cache__.get(a) === b) return true

  if (isNumber(depth)) (depth as number)--

  const __da__ = (a: any, b: any): boolean =>
    __deepEqual__(a, b, depth, options, __cache__)

  let k, v, tmp: any

  if (instanceOf(a, __ArrayBuffer__)) {
    ;(a = new __DataView__(a as any)), (b = new __DataView__(b as any))

    if (__ArrayBuffer__.isView(a)) {
      if (a.byteLength !== b.byteLength) return false
      a = new __Float64Array__(a.buffer)
      b = new __Float64Array__(b.buffer)
      for (k = a.byteLength; k-- > 0; ) if (a[k] !== b[k]) return false
      return true
    }
    return false
  }

  if ((tmp = instanceOf(a, Map)) || instanceOf(a, Set)) {
    if (a.size !== (b as any).size) return false

    if (tmp) {
      for ([k] of a as any) if (!(b as any).has(k)) return false
      for ([k, v] of a as any) if (!__da__(v, (b as any).get(k))) return false
    } else for (v of a) if (!(b as any).has(v)) return false
  }

  if (options.noweaks && (instanceOf(a, WeakMap) || instanceOf(a, WeakSet))) {
    return false
  }

  let keys = getOwnPropertyNames(a)
  if (keys.length !== getOwnPropertyNames(b).length) return false
  if (options.immerse && (options.natives || !isNativeFunction(proto))) {
    getProtoOwnPropNames(a, keys, options.natives)
  }
  if (instanceOf(a, Error)) keys = keys.filter((v: string) => v !== 'stack')
  for (v of keys)
    if (!(v in b) || !__da__((a as any)[v], (b as any)[v])) return false

  if (options.symbols && getOwnPropertySymbols) {
    const symbols = getOwnPropertySymbols(a)
    if (symbols.length !== getOwnPropertySymbols(b).length) return false
    for (v of symbols)
      if (!(v in b) || !__da__((a as any)[v], (b as any)[v])) return false
  }

  try {
    // prettier-ignore
    if (a[valueOf] !== __Object__[prototype][valueOf] && isFunction(a[valueOf])) {
      return __da__(a[valueOf](), b[valueOf]())
    }
    // prettier-ignore
    if (a[toString] !== __Object__[prototype][toString] && isFunction(a[toString])) {
      return __da__(a[toString](), b[toString]())
    }
  } catch (err) {
    return false
  }

  return true // proto === __Object__;
}

export const deepEqual = (
  a: any,
  b: any,
  depth: boolean | number = true
): boolean => __deepEqual__(a, b, depth, OPTIONS, new Map())

export const deepEqualExtended = (
  a: any,
  b: any,
  options: {
    depth?: number | boolean
    symbols?: boolean
    immerse?: boolean
    noweaks?: boolean
    natives?: boolean
  } = OPTIONS
): boolean =>
  (options = { ...OPTIONS, ...options }) &&
  __deepEqual__(a, b, options.depth, options, new Map())

deepEqual.extended = deepEqualExtended

export default deepEqual
