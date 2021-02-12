import { instanceOf } from '@wareset-utilites/lang/instance-of'

export const isPromise = (value: any): boolean => instanceOf(value, Promise)
