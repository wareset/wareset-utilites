import { __toArrayCase__ } from './lib'
import { toCapitalize } from './toCapitalize'

export const toCodePascalcase = (string: string): string =>
  __toArrayCase__(string)
    .map((v) => toCapitalize(v))
    .join('')
export default toCodePascalcase
