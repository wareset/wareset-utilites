import prototype from './lib/prototype'

export const propertyIsEnumerable = (o: any, k: string): boolean =>
  prototype.propertyIsEnumerable.call(o, k)
export default propertyIsEnumerable
