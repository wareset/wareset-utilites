export const slice: {
  (source: any[], n1: number, n2?: number): any[]
  (source: string, n1: number, n2?: number): string
} = (source: any, n1: number, n2?: number) => source.slice(n1, n2)
