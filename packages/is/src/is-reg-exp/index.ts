import { instanceOf } from '@wareset-utilites/lang/instance-of'

export const isRegExp = (v: any): v is RegExp => instanceOf(v, RegExp)
