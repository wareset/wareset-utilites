import { prototype } from './lib/prototype'

export const valueOf = (o: any): any => prototype.valueOf.call(o)
export default valueOf
