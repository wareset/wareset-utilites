import { isNill } from './isNill'

export const isVoid = (v: any): v is null | undefined /* | typeof NaN */ =>
  v !== v || isNill(v)
export default isVoid
