// import abs from './abs'
// import exp from './exp'
// import log from './log'
// export default (x: number): number => {
//   if (!(x === 0 || x === +1 / 0 || x === -1 / 0 || x !== x)) {
//     const a = abs(x)
//     const y = exp(log(a) / 3)
//     x = (x / a) * (y + (a / (y * y) - y) / 3)
//   }
//   return x
// }

const _13_ = 1 / 3
import pow from './pow'
export const cbrt = (x: number): number =>
  x === 0 ? x : x < 0 ? -pow(-x, _13_) : pow(x, _13_)
export default cbrt
