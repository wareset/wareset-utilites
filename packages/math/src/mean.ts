export const mean = (...n: number[]): number =>
  n.reduce((a, c) => a + c, 0) / n.length
export default mean
