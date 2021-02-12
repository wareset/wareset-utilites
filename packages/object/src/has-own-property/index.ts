import { object } from '../object'

export const hasOwnProperty = (o: any, k: string): boolean =>
  object.prototype.hasOwnProperty.call(o, k)
