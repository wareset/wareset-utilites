import { $EMPTY } from './lib'
import { __regexp__ } from './lib'

export const trim = (string: string, trimer?: string): string =>
  trimer
    ? string.replace(__regexp__(`^[${trimer}]+|[${trimer}]+$`), $EMPTY)
    : string.trim()
export default trim
