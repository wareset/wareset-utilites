import { splice } from '../splice'
import { abs } from '@wareset-utilites/math'

export const shift = <T>(list: T[], offset: number = 0): T | undefined =>
  splice(list, abs(offset), 1)[0]
