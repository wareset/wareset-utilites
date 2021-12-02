import { prototype } from './Object'

export const toString = (o: any): string => prototype.toString.call(o)
export default toString
