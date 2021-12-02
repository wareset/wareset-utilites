import { typeOf } from '@wareset-utilites/lang/typeOf'
import { typeofFactory } from './lib/typeofFactory'

export const isString = typeofFactory<string>(typeOf(''))
export default isString
