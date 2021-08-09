import { prototype } from './lib/prototype'

export const isPrototypeOf = (o: any, o2: any): boolean =>
  prototype.isPrototypeOf.call(o, o2)
export default isPrototypeOf
