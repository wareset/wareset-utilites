import { prototype } from './lib/prototype'

export const hasOwnProperty = <O extends {}, K extends PropertyKey>(
  o: O,
  k: K
): o is O & Record<K, any> => prototype.hasOwnProperty.call(o, k)
export default hasOwnProperty
