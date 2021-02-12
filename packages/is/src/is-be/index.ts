import { isVoid } from '../is-void'

export const isBe = (value: any): boolean => !isVoid(value)
