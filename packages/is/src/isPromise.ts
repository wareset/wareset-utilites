import { instanceOf } from '@wareset-utilites/lang/instanceOf'

export const isPromise = (v: any): v is Promise<any> => instanceOf(v, Promise)
export default isPromise
