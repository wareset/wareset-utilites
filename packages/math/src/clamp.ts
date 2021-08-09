import { max } from './max'
import { min } from './min'
export const clamp = (
  value: number,
  minValue: number = value,
  maxValue: number = value
): number => max(minValue, min(maxValue, value))
export default clamp
