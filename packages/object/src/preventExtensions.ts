import yoop from '@wareset-utilites/lang/yoop'
import __Object__ from './Object'

export const preventExtensions =
  __Object__.preventExtensions || (yoop as typeof Object.preventExtensions)
export default preventExtensions
