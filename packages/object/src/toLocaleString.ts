import { prototype } from './Object'

export const toLocaleString = (o: any): string =>
  prototype.toLocaleString.call(o)
export default toLocaleString
