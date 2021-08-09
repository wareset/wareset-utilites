import { yoop } from '@wareset-utilites/lang/yoop'
import { Object as __Object__ } from './Object'

export const seal = __Object__.seal || (yoop as typeof Object.seal)
export default seal
