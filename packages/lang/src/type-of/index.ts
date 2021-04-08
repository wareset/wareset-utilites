const __typeOf__ = (v: any): string => typeof v
const __es__ = __typeOf__('')

export const typeOf: {
  (value: any): string
  (value: any, type: string): boolean
} = (value: any, type?: string) => (
  (value = __typeOf__(value)),
  __typeOf__(type) === __es__ ? value === type : value
)
