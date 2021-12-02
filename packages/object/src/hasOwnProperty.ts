import { Object as __Object__ } from './Object'
import { prototype } from './Object'
// import { prototype as prototypeFn } from '@wareset-utilites/lang/Function'

export const hasOwnProperty =
  ((__Object__ as any).hasOwn ||
  ((o: any, k: any): any => prototype.hasOwnProperty.call(o, k))) as
  <O extends {}, K extends PropertyKey>(o: O, k: K) => o is O & Record<K, any>

// export const hasOwnProperty = prototypeFn.call.bind(prototype.hasOwnProperty) as
//   <O extends {}, K extends PropertyKey>(o: O, k: K) => o is O & Record<K, any>

export default hasOwnProperty
