import { __toArrayCase__ } from './lib'

export const toCodeKebabcase = (string: string): string =>
  __toArrayCase__(string).join('-')
export default toCodeKebabcase
