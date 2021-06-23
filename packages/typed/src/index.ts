const c = 'constructor',
  p = 'prototype',
  l = 'length',
  s = 'some'
const getProto = Object.getPrototypeOf || ((v: any): any => v.__proto__)
const getPrototypeOf = (v: any): any => (v == null ? v : getProto(v))
const getProtoFn = (v: any): any => (!v || !v[c] || v[c][p] !== v ? v : v[c])

const getCtor = (v: any): Function | object =>
  (v = getProtoFn(getPrototypeOf(v)))
const getCtors = (v: any, protos: any[] = []): (Function | object)[] => {
  do (v = getPrototypeOf(v)), protos.push(getProtoFn(v))
  while (v)
  return protos
}

const eq = (a: any, b: any): boolean =>
  a === b || (a === getCtor(b) && (!b[p] || typeof b !== 'function'))

const check = (fn: Function) => <T>(value: T, ...t: any[]): T | never => {
  if (t[l] && !fn(value, ...t)) throw new TypeError('' + value)
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
  !types[l] ? val : val[s]((ctor: any) => types[s]((t) => eq(ctor, t)))
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
  (val = getCtor(val)), !types[l] ? val : types[s]((t) => eq(val, t))
)

typed.check = check(typed)
typed.of = typedOf

export { typed, typedOf }
export default typed
