import prototype from './lib/prototype'

export const toString = (o: any): string => prototype.toString.call(o)
export default toString
