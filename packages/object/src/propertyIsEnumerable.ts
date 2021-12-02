import { prototype } from './Object'

export const propertyIsEnumerable = (o: any, k: string): boolean =>
  prototype.propertyIsEnumerable.call(o, k)
export default propertyIsEnumerable
