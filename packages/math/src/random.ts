import { Math as __Math__ } from './Math'
const __random__ = __Math__.random
export const random = (): number => __random__() || random()
export default random
