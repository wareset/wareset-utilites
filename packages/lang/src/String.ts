import { PROTOTYPE } from './lib'

const __String__ = String
const prototype = __String__[PROTOTYPE]
export { __String__ as String, prototype }
export default __String__
