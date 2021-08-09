import { log } from './log'
import { sqrt } from './sqrt'
import { Infinity } from './lib/Infinity'
export const asinh = (x: number): number =>
  x === -Infinity ? x : log(x + sqrt(x * x + 1))
export default asinh
