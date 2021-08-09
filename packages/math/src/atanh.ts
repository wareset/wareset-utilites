import { log } from './log'
export const atanh = (x: number): number => log((1 + x) / (1 - x)) / 2
export default atanh
