import { typeOf } from '@wareset-utilites/lang/typeOf'
import { typeofFactory } from './lib/typeofFactory'

export const isFunction = typeofFactory<Function>(typeOf(typeOf))
export default isFunction
