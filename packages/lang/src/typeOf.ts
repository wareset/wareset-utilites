export const typeOf: {
  (value: any): string
  (value: any, type: string): boolean
} = (value: any, type?: string) => (
  (value = typeof value), type ? value === type : value
)
export default typeOf
