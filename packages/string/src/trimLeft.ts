import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'

export const trimLeft = (string: string, trimer?: string): string =>
  string.replace(trimer ? new __RegExp__(`^[${trimer}]+`) : /^\s+/, '')
export default trimLeft
