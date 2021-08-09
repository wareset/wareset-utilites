import { noop } from '@wareset-utilites/lang/noop'
import { Object as __Object__ } from './Object'

export const isSealed = __Object__.isSealed || (noop as typeof Object.isSealed)
export default isSealed
