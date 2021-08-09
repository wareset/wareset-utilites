import { yoop } from '@wareset-utilites/lang/yoop'
import { Object as __Object__ } from './Object'

export const preventExtensions =
  __Object__.preventExtensions || (yoop as typeof Object.preventExtensions)
export default preventExtensions
