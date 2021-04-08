import { isNill } from '../is-nill'

export const isVoid = (v: any): v is null | undefined | typeof NaN =>
  v !== v || isNill(v)
