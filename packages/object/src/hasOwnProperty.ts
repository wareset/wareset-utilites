import prototype from './lib/prototype'

export const hasOwnProperty = (o: any, k: PropertyKey): boolean =>
  prototype.hasOwnProperty.call(o, k)
export default hasOwnProperty
