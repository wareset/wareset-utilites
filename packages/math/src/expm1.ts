import { exp } from './exp'
export const expm1 = (x: number): number => (x === 0 ? x : exp(x) - 1)
export default expm1
