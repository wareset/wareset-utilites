const size = (v: any[] | string): number => v.length

const c = 'constructor'
const p = 'prototype'
const getProto = Object.getPrototypeOf || ((v: any): any => v.__proto__)
const getPrototypeOf = (v: any): any => (v == null ? v : getProto(v))
const getProtoFn = (v: any): any => (!v || !v[c] || v[c][p] !== v ? v : v[c])

const getCtor = (v: any): Function | object =>
  (v = getProtoFn(getPrototypeOf(v)))
const getCtors = (v: any, protos: any[] = []): Array<Function | object> => {
  do (v = getPrototypeOf(v)), protos.push(getProtoFn(v))
  while (v)
  return protos
}

const eq = (a: any, b: any): boolean =>
  a === b || (a === getCtor(b) && (!b[p] || typeof b !== 'function'))

const check = (fn: Function) => <T>(value: T, ...t: any[]): T | never => {
  if (size(t) && !fn(value, ...t)) throw new TypeError('' + value)
  return value
}

type IPrototype = Function | object | null | undefined
type IPrototypesList = IPrototype[]

const typedOf: {
  (value: any): IPrototypesList
  (value: any, ...types: IPrototypesList): boolean
  check: <T>(value: T, ...t: any[]) => T | never
} = (val: any, ...types: IPrototypesList) => (
  (val = getCtors(val)),
  !size(types) ? val : val.some((ctor: any) => types.some((t) => eq(ctor, t)))
)

typedOf.check = check(typedOf)

const typed: {
  (value: any): IPrototype
  (value: any, ...types: IPrototypesList): boolean
  check: <T>(value: T, ...t: any[]) => T | never
  of: {
    (value: any): IPrototypesList
    (value: any, ...types: IPrototypesList): boolean
    check: <T>(value: T, ...t: any[]) => T | never
  }
} = (val: any, ...types: IPrototypesList) => (
  (val = getCtor(val)), !size(types) ? val : types.some((t) => eq(val, t))
)

typed.check = check(typed)
typed.of = typedOf

export { typed, typedOf }
export default typed
