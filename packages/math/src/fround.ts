import Math from './Math'
export const fround =
  Math.fround || ((x: number): number => new Float32Array([x])[0])
export default fround
