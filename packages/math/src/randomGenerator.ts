import { pow } from './pow'
import { imul } from './imul'
import { floor } from './floor'
import { randomIsFloating } from './lib/randomIsFloating'
const __rf2__ = pow(2, 31)
const __rf1__ = __rf2__ - 1
export const randomGenerator = (seed: number) => (
  min = 0,
  max = 1,
  floating: boolean = randomIsFloating(min, max)
): number => (
  (min =
    (((seed = imul(16807, seed) | 0 % __rf1__) & __rf1__) / __rf2__) *
      (max - min) +
    min),
  floating ? min : floor(min)
)
export default randomGenerator
