import { isFunction } from './isFunction'

export const isThenable = (v: any): v is Promise<any> =>
  v != null && isFunction(v.then)
export default isThenable
