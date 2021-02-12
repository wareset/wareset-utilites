export const first: {
  <T>(v: T[], offset?: number): T | undefined
  (v: string, offset?: number): string | undefined
} = (v: any, offset = 0) => v[offset]
