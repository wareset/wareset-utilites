import { PROTOTYPE } from './lib'

const __Number__ = Number
const prototype = __Number__[PROTOTYPE]
export { __Number__ as Number, prototype }
export default __Number__
