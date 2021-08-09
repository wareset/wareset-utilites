import { exp } from './exp'
export const cosh = (x: number): number => ((x = exp(x)), (x + 1 / x) / 2)
export default cosh
