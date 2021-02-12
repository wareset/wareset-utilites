import { length } from '../length'

export const last: {
  <T>(v: T[], offset?: number): T | undefined
  (v: string, offset?: number): string | undefined
} = (v: any, offset = 0) => v[length(v) - 1 - offset]
