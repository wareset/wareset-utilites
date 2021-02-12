import { replace } from '@wareset-utilites/lang/replace'
import { __regexp__ } from '../lib'

export const trim = (string: string, trimer?: string): string =>
  trimer
    ? replace(string, __regexp__(`^[${trimer}]+|[${trimer}]+$`))
    : string.trim()
