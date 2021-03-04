import { splice } from '../splice'
import { length } from '@wareset-utilites/lang/length'
import { abs } from '@wareset-utilites/math'

export const pop = <T>(list: T[], offset?: number): T | undefined =>
  offset ? splice(list, length(list) - abs(offset), 1)[0] : list.pop()
