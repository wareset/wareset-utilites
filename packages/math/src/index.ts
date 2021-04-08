const math = Math

export const abs = math.abs
export const acos = math.acos
export const asin = math.asin
export const atan = math.atan
export const atan2 = math.atan2
export const ceil = math.ceil
export const cos = math.cos
export const exp = math.exp
export const floor = math.floor
export const log = math.log
export const max = math.max
export const min = math.min
export const pow = math.pow
export const round = math.round
export const sin = math.sin
export const sqrt = math.sqrt
export const tan = math.tan

export const hypot = (...n: number[]): number =>
  sqrt(n.reduce((a, c) => a + c * c))

export const mean = (...n: number[]): number =>
  n.reduce((a, c) => a + c) / n.length

export const sign = (n: number): number =>
  (n = +n) !== n ? NaN : n > 0 ? 1 : -1

export const trunc = (n: number): number =>
  n - (n % 1) || (n < 0 ? -0 : n === 0 ? n : 0)

export const clamp = (
  value: number,
  minValue: number = value,
  maxValue: number = value
): number => max(minValue, min(maxValue, value))

export const imul = (a: number, b: number): number => {
  const ah = (a >>> 16) & 0xffff
  const al = a & 0xffff
  const bh = (b >>> 16) & 0xffff
  const bl = b & 0xffff

  return (al * bl + (((ah * bl + al * bh) << 16) >>> 0)) | 0
}

const __random__ = math.random
export const random = (min = 0, max = 1, floating?: boolean): number => (
  (floating = floating || max !== floor(max) || min !== floor(min)),
  (min = __random__() * (max - min) + min),
  floating ? min : floor(min)
)

const __rf1__ = 2147483647
const __rf2__ = __rf1__ + 1
export const randomGenerator = (seed: number) => (
  min = 0,
  max = 1,
  floating?: boolean
): number => (
  (floating = floating || max !== floor(max) || min !== floor(min)),
  (min =
    (((seed = imul(16807, seed) | 0 % __rf1__) & __rf1__) / __rf2__) *
      (max - min) +
    min),
  floating ? min : floor(min)
)
