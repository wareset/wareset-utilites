export const last: {
  <T>(v: T[], offset?: number): T | undefined
  (v: string, offset?: number): string | undefined
} = (v: any, offset?: number) => v[v.length - 1 - (+offset! || 0)]
export default last
