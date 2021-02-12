export const lastIndexOf: {
  <T>(v: T[], value: T, offset?: number): number
  (v: string, value: string, offset?: number): number
} = (source: any, value: any, offset?: number) =>
  source.lastIndexOf(value, offset)
