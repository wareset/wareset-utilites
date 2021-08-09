export const instanceOf = <T>(
  value: any,
  type: new (...a: any[]) => T
): value is T => value instanceof type
export default instanceOf
