import { __toArrayCase__ } from './lib'

export const toCodeSnakecase = (string: string): string =>
  __toArrayCase__(string).join('_')
export default toCodeSnakecase
