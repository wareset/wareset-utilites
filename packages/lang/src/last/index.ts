import { length } from '../length'
import { abs } from '@wareset-utilites/math'

export const last: {
  <T>(v: T[], offset?: number): T | undefined
  (v: string, offset?: number): string | undefined
} = (v: any, offset = 0) => v[length(v) - 1 - abs(offset)]
