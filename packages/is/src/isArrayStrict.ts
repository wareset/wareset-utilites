import { typed } from '@wareset-utilites/typed'
import { Array as __Array__ } from '@wareset-utilites/lang/Array'

export const isArrayStrict = (v: any): v is any[] => typed(v, __Array__)
export default isArrayStrict
