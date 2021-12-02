export const last: {
  <T>(v: ArrayLike<T>, offset?: number): T | undefined
} = (v: any, offset?: number) => v[v.length - 1 - (offset || 0)]
export default last
