import { typeOf } from '@wareset-utilites/lang/typeOf'
import { typeofFactory } from './lib/typeofFactory'

export const isNumber = typeofFactory<number>(typeOf(0))
export default isNumber
