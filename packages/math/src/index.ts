const {
  abs,
  acos,
  asin,
  atan,
  atan2,
  ceil,
  cos,
  exp,
  floor,
  // hypot: __hypot__,
  log,
  max,
  min,
  pow,
  random: __random__,
  round,
  // sign: __sign__,
  sin,
  sqrt,
  tan
  // trunc: __trunc__
} = Math

const random = (min = 0, max = 1, rounded?: boolean): number => (
  (min = __random__() * (max - min) + min), rounded ? floor(min) : min
)

const hypot = (...n: number[]): number => sqrt(n.reduce((a, c) => a + c * c))

const sign = (n: number): number => ((n = +n) !== n ? NaN : n > 0 ? 1 : -1)

const trunc = (n: number): number =>
  n - (n % 1) || (n < 0 ? -0 : n === 0 ? n : 0)

export {
  abs,
  acos,
  asin,
  atan,
  atan2,
  ceil,
  cos,
  exp,
  floor,
  hypot,
  log,
  max,
  min,
  pow,
  random,
  round,
  sign,
  sin,
  sqrt,
  tan,
  trunc
}
