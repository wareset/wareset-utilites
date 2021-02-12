'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
}); // const ERROR_STRING = () => String(Error().stack)
// let BASE_STACK = []
// const stack = () =>
//   ERROR_STRING()
//     .split(/\n+/g)
//     .map((v) => v.trim())
//     .filter((v) => BASE_STACK.indexOf(v) === -1)
// const DEFAULT_STACK = {
//   __stack__: [],
//   get stack() {
//     return stack()
//   }
// }
// export const stacktrace = (() => {
//   BASE_STACK = DEFAULT_STACK.stack
//   return (verbose) => {
//     let text = stack().reverse()
//     text.pop()
//     if (!verbose) {
//       text = text.map((v) => v.split(/:/g).slice(0, -2).join(':'))
//     }
//     if (verbose === 1) {
//       text = text.map((v) =>
//         v
//           .split(/:/g)
//           .slice(-2)
//           .join(':')
//           .replace(/[^\d:]/g, '')
//       )
//     } else text = text.map((v, k, a) => k + '__' + v)
//     if (!text.length) text.push('0__global')
//     return text
//   }
// })()
// export default stacktrace

var stacktrace = () => ('' + Error().stack).split(/\s*\n+\s*/).slice(2);

exports.default = stacktrace;
exports.stacktrace = stacktrace;
