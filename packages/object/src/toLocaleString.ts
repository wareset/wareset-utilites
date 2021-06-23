import prototype from './lib/prototype'

export const toLocaleString = (o: any): string =>
  prototype.toLocaleString.call(o)
export default toLocaleString
