import { instanceOf } from '@wareset-utilites/lang/instanceOf'
import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'

export const isRegExp = (v: any): v is RegExp => instanceOf(v, __RegExp__)
export default isRegExp
