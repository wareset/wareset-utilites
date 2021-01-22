import {
  isNumber,
  isObject,
  isFunction,
  isNativeFunction
} from '@wareset-utilites/is'
import { getOwnPropertyNames } from '@wareset-utilites/object'
import { typed } from '@wareset-utilites/typed'

const OBJ_PROTOTYPE = Object.prototype

const getProtoOwnPropNames = (
  a: any,
  keys: string[],
  natives: boolean | undefined
): void => {
  ;(typed.of(a) as Function[]).forEach((p) => {
    if (p && (natives || !isNativeFunction(p))) {
      keys.push(...getOwnPropertyNames(p.prototype))
    }
  })
}

const getOwnPropSymbols = Object.getOwnPropertySymbols

const iof = (v: any, f: Function): boolean => v instanceof f

export interface IOptions {
  depth?: number | boolean
  symbols?: boolean
  immerse?: boolean
  noweaks?: boolean
  natives?: boolean
}

const OPTIONS: IOptions = {
  depth: true,
  symbols: true,
  immerse: true,
  noweaks: false,
  natives: false
}

const __deepEqual__ = (
  a: any,
  b: any,
  depth: boolean | number | undefined,
  options: IOptions = OPTIONS,
  __cache__: Map<any, any>
): boolean => {
  if (a === b) return true
  if (!depth || !isObject(a) || !isObject(b) || depth < 0)
    return a !== a && b !== b

  const proto = typed(a)
  if (proto !== typed(b)) return false

  if (!__cache__.has(a)) __cache__.set(a, b)
  else if (__cache__.get(a) === b) return true

  if (isNumber(depth)) (depth as number)--

  let k, v

  try {
    if (iof(a, ArrayBuffer)) (a = new DataView(a)), (b = new DataView(b))

    if (ArrayBuffer.isView(a)) {
      if (a.byteLength !== b.byteLength) return false
      ;(a = new Float64Array(a.buffer)), (b = new Float64Array(b.buffer))
      for (k = a.byteLength; k-- > 0; undefined) {
        if (a[k] !== b[k]) return false
      }
      return true
    }
  } catch (err) {
    return false
  }

  if (iof(a, Map)) {
    if (a.size !== b.size) return false

    for ([k] of a) if (!b.has(k)) return false
    for ([k, v] of a) {
      if (!__deepEqual__(v, b.get(k), depth, options, __cache__)) return false
    }
    // if (proto === Map) return true;
  }

  if (iof(a, Set)) {
    if (a.size !== b.size) return false
    for (v of a) if (!b.has(v)) return false
    // if (proto === Set) return true;
  }

  if (options.noweaks && (iof(a, WeakMap) || iof(a, WeakSet))) {
    return false
  }

  let keys = getOwnPropertyNames(a)
  if (keys.length !== getOwnPropertyNames(b).length) return false
  if (options.immerse && (options.natives || !isNativeFunction(proto))) {
    getProtoOwnPropNames(a, keys, options.natives)
  }
  if (a instanceof Error) keys = keys.filter((v: string) => v !== 'stack')
  for (v of keys) {
    if (!(v in b) || !__deepEqual__(a[v], b[v], depth, options, __cache__)) {
      return false
    }
  }

  if (options.symbols && getOwnPropSymbols) {
    const symbols = getOwnPropSymbols(a)
    if (symbols.length !== getOwnPropSymbols(b).length) return false
    for (v of symbols) {
      if (!(v in b) || !__deepEqual__(a[v], b[v], depth, options, __cache__)) {
        return false
      }
    }
  }

  try {
    if (a.valueOf !== OBJ_PROTOTYPE.valueOf && isFunction(a.valueOf)) {
      // prettier-ignore
      return __deepEqual__(
        a.valueOf(), b.valueOf(), depth, options, __cache__)
    }

    if (a.toString !== OBJ_PROTOTYPE.toString && isFunction(a.toString)) {
      // prettier-ignore
      return __deepEqual__(
        a.toString(), b.toString(), depth, options, __cache__)
    }
  } catch (err) {
    return false
  }

  return true // proto === Object;
}

export const deepEqual = (
  a: any,
  b: any,
  depth: boolean | number = true
): boolean => {
  return __deepEqual__(a, b, depth, OPTIONS, new Map())
}

export const deepEqualExtended = (
  a: any,
  b: any,
  options: IOptions = OPTIONS
): boolean => {
  options = { ...OPTIONS, ...options }
  return __deepEqual__(a, b, options.depth, options, new Map())
}

deepEqual.extended = deepEqualExtended

export default deepEqual
