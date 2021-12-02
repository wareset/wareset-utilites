import { PROTOTYPE } from './lib'

const __Function__ = Function
const prototype = __Function__[PROTOTYPE]
export { __Function__ as Function, prototype }
export default __Function__
