import noop from '@wareset-utilites/lang/noop'
import __Object__ from './Object'

export const isExtensible =
  __Object__.isExtensible || (noop as typeof Object.isExtensible)
export default isExtensible
