/* eslint-disable no-invalid-this */
import { getPrototypeOf } from '@wareset-utilites/object/getPrototypeOf'

// const getProto = (v: any): any =>
//   !v || !v.constructor || v.constructor.prototype !== v ? v : v.constructor

const getProto = (v: any): any =>
  v == null
    ? null
    : !v.constructor || v.constructor.prototype !== v
      ? v
      : v.constructor

const check = (fn: typeof typed | typeof typedOf) => (
  ...a: Parameters<typeof fn>
): Parameters<typeof fn>[0] | never => {
  if (a.length > 1 && (fn as any)(...a) === false) {
    throw { value: a.shift(), types: a }
  }
  return a[0]
}

const typed: {
  <T>(v: T): (new (...a: any) => T) | any
  <T>(v: T, ...a: (Function | object | null | undefined)[]): boolean
  of: typeof typedOf
  try: ReturnType<typeof check>
} = (v: any, ...a: any[]): any => {
  v = v == null ? void 0 : getProto(getPrototypeOf(v))
  return a.length > 0 ? a.some(typedArr, v) : v
}
typed.try = check(typed)
const typedArr = function(this: any, v: any): boolean {
  return this === v
}

const typedOf: {
  <T>(v: T): (
    | (new (...a: any) => T)
    | (new (...a: any) => new (...a: any) => T)
    | (new (...a: any) => new (...a: any) => new (...a: any) => T)
    | any
  )[]
  <T>(v: T, ...a: (Function | object | null | undefined)[]): boolean
  try: ReturnType<typeof check>
} = (v: any, ...a: any[]): any => {
  const res = []
  for (; v != null && ((v = getPrototypeOf(v)) || !res.length);) {
    res.push(getProto(v))
  }
  return a.length > 0 ? res.some(typedOfArr, a) : res
}
typed.of = typedOf
typedOf.try = check(typedOf)
const typedOfArr = function(this: any, v: any): boolean {
  return this.some(typedArr, v)
}

export { typed, typedOf }
export default typed
