import { floor } from './floor'
import { log } from './log'
export const clz32 = (x: number): number =>
  (x = +x >>> 0) !== 0 ? 31 - floor(log(x + 0.5) / log(2)) : 32
export default clz32
