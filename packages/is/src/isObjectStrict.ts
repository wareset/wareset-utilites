import { Object as __Object__ } from '@wareset-utilites/lang/Object'
import { typed } from '@wareset-utilites/typed'

export const isObjectStrict = (value: any): value is { [key: string]: any } =>
  typed(value, __Object__, null)
export default isObjectStrict
