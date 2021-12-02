export const typeOf: {
  (value: any): string
  (value: any, type: string): boolean
} = (value: any, type?: string) => (
  value = typeof value, type === void 0 ? value : value === type
)
export default typeOf
