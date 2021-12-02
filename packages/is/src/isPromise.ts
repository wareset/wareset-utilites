import { Promise as __Promise__ } from '@wareset-utilites/lang/Promise'
import { instanceofFactory } from './lib/instanceofFactory'

export const isPromise = instanceofFactory<Promise<any>>(__Promise__)
export default isPromise
