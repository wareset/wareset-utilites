import { instanceOf } from '@wareset-utilites/lang/instance-of'

export const isRegExp = (value: any): boolean => instanceOf(value, RegExp)
