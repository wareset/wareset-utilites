import { yoop } from '@wareset-utilites/lang/yoop'
import { Object as __Object__ } from './Object'

export const freeze = __Object__.freeze || (yoop as typeof Object.freeze)
export default freeze
