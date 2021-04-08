/* eslint-disable max-len */

const __run__ = (ErrorFn: any, ...a: any[]): never => {
  throw new ErrorFn(...a)
}

// prettier-ignore
export const error: {
  (...a: any[]): never
} = ((...a: any[]) => { __run__(Error, ...a) as never }) as (...a: any[]) => never
// prettier-ignore
export const evalError: {
  (...a: any[]): never
} = ((...a: any[]) => { __run__(EvalError, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const rangeError: {
  (...a: any[]): never
} = ((...a: any[]) => { __run__(RangeError, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const referenceError: {
  (...a: any[]): never
} = ((...a: any[]) => { __run__(ReferenceError, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const syntaxError: {
  (...a: any[]): never
} = ((...a: any[]) => { __run__(SyntaxError, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const typeError: {
  (...a: any[]): never
} = ((...a: any[]) => { __run__(TypeError, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const uriError: {
  (...a: any[]): never
} = ((...a: any[]) => { __run__(URIError, ...a) }) as (...a: any[]) => never
