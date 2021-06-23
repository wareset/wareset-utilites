import exp from './exp'
export const sinh = (x: number): number => ((x = exp(x)), (x - 1 / x) / 2)
export default sinh
