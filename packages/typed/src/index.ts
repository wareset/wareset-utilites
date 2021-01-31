const size = (v: any[] | string): number => v.length

const getProto = Object.getPrototypeOf || ((v: any): any => v.__proto__)
const getPrototypeOf = (v: any): any => (v == null ? v : getProto(v))
const getProtoFn = (v: any): any =>
  !v || !v.constructor || v.constructor.prototype !== v ? v : v.constructor

const getCtor = (v: any): Function | object =>
  (v = getProtoFn(getPrototypeOf(v)))
const getCtors = (v: any): Array<Function | object> => {
  const protos = []
  do (v = getPrototypeOf(v)), protos.push(getProtoFn(v))
  while (v)
  return protos
}

const eq = (a: any, b: any): boolean =>
  a === b || (a === getCtor(b) && (!b.prototype || typeof b !== 'function'))

const check = (fn: Function) => (value: any, ...t: any[]): any => {
  if (size(t) && !fn(value, ...t)) throw new TypeError(value)
  return value
}

type IPrototype = Function | object | null | undefined
type IPrototypesList = IPrototype[]

const typedOf: {
  (value: any): IPrototypesList
  (value: any, ...types: IPrototypesList): boolean
  check: typeof check
} = (value: any, ...types: IPrototypesList): any => {
  const ctors = getCtors(value)
  return !size(types)
    ? ctors
    : ctors.some((ctor) => types.some((t) => eq(ctor, t)))
}
typedOf.check = check(typedOf)

const typed: {
  (value: any): IPrototype
  (value: any, ...types: IPrototypesList): boolean
  check: typeof check
  of: typeof typedOf
} = (value: any, ...types: IPrototypesList): any => {
  const ctor = getCtor(value)
  return !size(types) ? ctor : types.some((t) => eq(ctor, t))
}
typed.check = check(typed)
typed.of = typedOf

export { typed, typedOf }
export default typed
