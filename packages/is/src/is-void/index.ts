import { isNill } from '../is-nill'

export const isVoid = (value: any): boolean => value !== value || isNill(value)
