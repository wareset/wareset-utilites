import floor from '../floor'
export default (min: number, max: number): boolean =>
  max - min <= 1 || max !== floor(max) || min !== floor(min)
