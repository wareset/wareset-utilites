import { replace } from '@wareset-utilites/lang/replace'
import { __trimer__, __regexp__ } from '../lib'

export const trimLeft = (string: string, trimer = __trimer__): string =>
  replace(string, __regexp__(`^[${trimer}]+`))
