import { Math as __Math__ } from './Math'
export const fround =
  __Math__.fround || ((x: number): number => new Float32Array([x])[0])
export default fround
