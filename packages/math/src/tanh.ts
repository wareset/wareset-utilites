import exp from './exp'
import Infinity from './lib/Infinity'
// prettier-ignore
export const tanh = (x: number): number =>
  x === Infinity
    ? 1
    : x === -Infinity
      ? -1
      : (exp(x) - exp(-x)) / (exp(x) + exp(-x))
export default tanh
