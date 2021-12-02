import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'
import { instanceofFactory } from './lib/instanceofFactory'

export const isRegExp = instanceofFactory<RegExp>(__RegExp__)
export default isRegExp
