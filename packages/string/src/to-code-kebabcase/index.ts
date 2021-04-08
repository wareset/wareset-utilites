import { join } from '@wareset-utilites/array/join'

import { __toArrayCase__, __dash__ } from '../lib'

export const toCodeKebabcase = (string: string): string =>
  join(__toArrayCase__(string), __dash__)
