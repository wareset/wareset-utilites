const __Promise__ = (typeof Promise !== '' + void 0
  ? Promise
  : function _(): void {}) as PromiseConstructor
export { __Promise__ as Promise }
export default __Promise__
