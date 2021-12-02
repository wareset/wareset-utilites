import { Set as __Set__ } from '@wareset-utilites/lang/Set'
import { instanceofFactory } from './lib/instanceofFactory'

export const isSet = instanceofFactory<Set<any>>(__Set__)
export default isSet
