export const trunc = (n: number): number =>
  n - (n % 1) || (n < 0 ? -0 : n === 0 ? n : 0)
export default trunc
