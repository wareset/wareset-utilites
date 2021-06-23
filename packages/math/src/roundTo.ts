import pow from './pow'
import round from './round'
export const roundTo = (n: number, precision?: number): number =>
  !precision
    ? round(n)
    : round(n * (precision = pow(10, precision))) / precision
export default roundTo
