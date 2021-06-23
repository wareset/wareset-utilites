import sqrt from './sqrt'
export const hypot = (...n: number[]): number =>
  sqrt(n.reduce((a, c) => a + c * c, 0))
export default hypot
