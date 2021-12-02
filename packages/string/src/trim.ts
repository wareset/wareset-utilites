import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'

export const trim = (string: string, trimer?: string): string =>
  trimer
    ? string.replace(new __RegExp__(`^[${trimer}]+|[${trimer}]+$`, 'g'), '')
    : string.trim()
export default trim
