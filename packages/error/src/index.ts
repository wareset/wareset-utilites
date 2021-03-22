const __run__ = (ErrorFn: any, ...a: any[]): never => {
  throw new ErrorFn(...a)
}
export const error = (...a: any[]): never => __run__(Error, ...a)

export const evalError = (...a: any[]): never => __run__(EvalError, ...a)

export const rangeError = (...a: any[]): never => __run__(RangeError, ...a)

export const referenceError = (...a: any[]): never =>
  __run__(ReferenceError, ...a)

export const syntaxError = (...a: any[]): never => __run__(SyntaxError, ...a)

export const typeError = (...a: any[]): never => __run__(TypeError, ...a)





export const uriError = (...a: any[]): never => __run__(URIError, ...a)
