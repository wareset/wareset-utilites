import { splice } from '../splice'
import { abs } from '@wareset-utilites/math'

export const shift = <T>(list: T[], offset?: number): T | undefined =>
  offset ? splice(list, abs(offset), 1)[0] : list.shift()
