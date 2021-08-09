import { noop } from '@wareset-utilites/lang/noop'
import { Object as __Object__ } from './Object'

export const isFrozen = __Object__.isFrozen || (noop as typeof Object.isFrozen)
export default isFrozen
