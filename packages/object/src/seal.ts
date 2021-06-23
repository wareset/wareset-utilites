import yoop from '@wareset-utilites/lang/yoop'
import __Object__ from './Object'

export const seal = __Object__.seal || (yoop as typeof Object.seal)
export default seal
