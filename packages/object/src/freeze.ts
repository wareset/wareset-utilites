import yoop from '@wareset-utilites/lang/yoop'
import __Object__ from './Object'

export const freeze = __Object__.freeze || (yoop as typeof Object.freeze)
export default freeze
