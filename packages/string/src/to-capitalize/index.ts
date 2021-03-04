import { slice } from '@wareset-utilites/lang'

import { toUppercase } from '../to-uppercase'
import { toLowercase } from '../to-lowercase'

export const toCapitalize = (string: string): string =>
  string ? toUppercase(string[0]) + toLowercase(slice(string, 1)) : string
