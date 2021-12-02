import { prototype } from './Object'

export const valueOf = (o: any): any => prototype.valueOf.call(o)
export default valueOf
