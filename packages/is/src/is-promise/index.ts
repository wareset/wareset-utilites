import { instanceOf } from '@wareset-utilites/lang/instance-of'

export const isPromise = (v: any): v is Promise<any> => instanceOf(v, Promise)
