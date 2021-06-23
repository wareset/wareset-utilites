/* eslint-disable max-len */

export const ErrorClass = Error
export const EvalErrorClass = EvalError
export const RangeErrorClass = RangeError
export const ReferenceErrorClass = ReferenceError
export const SyntaxErrorClass = SyntaxError
export const TypeErrorClass = TypeError
export const URIErrorClass = URIError

const __run__ = (ErrorFn: any, ...a: any[]): never => {
  throw new ErrorFn(...a)
}

// prettier-ignore
export const throwError =
  ((...a: any[]) => { __run__(ErrorClass, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const throwEvalError =
  ((...a: any[]) => { __run__(EvalErrorClass, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const throwRangeError =
  ((...a: any[]) => { __run__(RangeErrorClass, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const throwReferenceError =
  ((...a: any[]) => { __run__(ReferenceErrorClass, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const throwSyntaxError =
  ((...a: any[]) => { __run__(SyntaxErrorClass, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const throwTypeError =
  ((...a: any[]) => { __run__(TypeErrorClass, ...a) }) as (...a: any[]) => never
// prettier-ignore
export const throwURIError =
  ((...a: any[]) => { __run__(URIErrorClass, ...a) }) as (...a: any[]) => never
