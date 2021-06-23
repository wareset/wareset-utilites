import { $DASH } from './lib'

import { __toArrayCase__ } from './lib'

export const toCodeKebabcase = (string: string): string =>
  __toArrayCase__(string).join($DASH)
export default toCodeKebabcase
