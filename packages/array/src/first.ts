export const first: {
  <T>(v: T[], offset?: number): T | undefined
  (v: string, offset?: number): string | undefined
} = (v: any, offset?: number) => v[offset || 0]
export default first
