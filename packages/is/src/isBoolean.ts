import { typeOf } from '@wareset-utilites/lang/typeOf'
import { typeofFactory } from './lib/typeofFactory'

export const isBoolean = typeofFactory<boolean>(typeOf(true))
export default isBoolean
