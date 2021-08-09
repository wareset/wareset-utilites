import { $EMPTY } from './lib'

import { __toArrayCase__ } from './lib'
import { toCapitalize } from './toCapitalize'

export const toCodeCamelcase = (string: string): string =>
  __toArrayCase__(string)
    .map((v, k) => (k ? toCapitalize(v) : v))
    .join($EMPTY)
export default toCodeCamelcase
