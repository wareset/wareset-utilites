export const sign = (n: number): number =>
  n !== (n = +n) ? NaN : n > 0 ? 1 : n < 0 ? -1 : n
export default sign
