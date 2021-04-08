import { indexOf } from '../index-of'

export const includes: {
  <T>(v: T[], value: T): boolean
  (v: string, value: string): boolean
} = (source: any, value: any) => indexOf(source, value) > -1
