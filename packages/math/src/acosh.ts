import log from './log'
import sqrt from './sqrt'
export const acosh = (x: number): number => log(x + sqrt(x * x - 1))
export default acosh
