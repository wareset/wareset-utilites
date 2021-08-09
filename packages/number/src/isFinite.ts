import { isFinite as isFiniteGlobal } from '@wareset-utilites/lang/isFinite'

export const isFinite = (v: any): boolean => v === +v && isFiniteGlobal(v)
export default isFinite
