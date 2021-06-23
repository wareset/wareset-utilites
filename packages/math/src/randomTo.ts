import floor from './floor'
import random from './random'
import randomIsFloating from './lib/randomIsFloating'
export const randomTo = (
  min = 0,
  max = 1,
  floating: boolean = randomIsFloating(min, max)
): number => ((min = random() * (max - min) + min), floating ? min : floor(min))
export default randomTo
