import { getPrototypeOf } from '@wareset-utilites/object/getPrototypeOf'
import { typeOf } from '@wareset-utilites/lang/typeOf'

const c = 'constructor',
  p = 'prototype',
  l = 'length',
  s = 'some'
// const __getProto__ = Object.getPrototypeOf || ((v: any): any => v.__proto__)
const getPrototype = (v: any): any => (v == null ? v : getPrototypeOf(v))
const getProtoFn = (v: any): any => (!v || !v[c] || v[c][p] !== v ? v : v[c])

const getCtor = (v: any): Function | object => (v = getProtoFn(getPrototype(v)))
const getCtors = (v: any): (Function | object)[] => {
  const protos: any[] = []
  while ((v = getPrototype(v)) || !protos[l]) protos.push(getProtoFn(v))
  return protos
}

const f = typeOf(getPrototype)
const eq = (a: any, b: any): boolean =>
  a === b || (a === getCtor(b) && (!b[p] || !typeOf(b, f)))

const check = (fn: Function) => <T>(value: T, ...t: any[]): T | never => {
  // eslint-disable-next-line no-throw-literal
  if (t[l] && !fn(value, ...t)) throw value
  return value
}

type IPrototype = Function | object | null | undefined
type IPrototypesList = IPrototype[]

const typedOf: {
  (value: any): IPrototypesList
  (value: any, ...types: IPrototypesList): boolean
  try: <T>(value: T, ...t: any[]) => T | never
} = (val: any, ...types: IPrototypesList) => (
  (val = getCtors(val)),
  !types[l] ? val : val[s]((ctor: any) => types[s]((t) => eq(ctor, t)))
)
typedOf.try = check(typedOf)

const typed: {
  (value: any): IPrototype
  (value: any, ...types: IPrototypesList): boolean
  try: <T>(value: T, ...t: any[]) => T | never
  of: {
    (value: any): IPrototypesList
    (value: any, ...types: IPrototypesList): boolean
    try: <T>(value: T, ...t: any[]) => T | never
  }
} = (val: any, ...types: IPrototypesList) => (
  (val = getCtor(val)), !types[l] ? val : types[s]((t) => eq(val, t))
)
typed.try = check(typed)
typed.of = typedOf

export { typed, typedOf }
export default typed
