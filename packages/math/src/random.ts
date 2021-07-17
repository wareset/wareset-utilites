import Math from './Math'
const __random__ = Math.random
export const random = (): number => __random__() || random()
export default random
