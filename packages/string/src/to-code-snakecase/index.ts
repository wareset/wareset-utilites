import { join } from '@wareset-utilites/array/join'

import { __toArrayCase__, __underline__ } from '../lib'

export const toCodeSnakecase = (string: string): string =>
  join(__toArrayCase__(string), __underline__)
