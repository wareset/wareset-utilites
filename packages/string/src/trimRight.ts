import { $EMPTY } from './lib'
import { __trimer__, __regexp__ } from './lib'

export const trimRight = (string: string, trimer?: string): string =>
  string.replace(__regexp__(`[${trimer || __trimer__}]+$`), $EMPTY)
export default trimRight
