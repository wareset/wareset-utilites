import instanceOf from '@wareset-utilites/lang/instanceOf'

export const isRegExp = (v: any): v is RegExp => instanceOf(v, RegExp)
export default isRegExp
