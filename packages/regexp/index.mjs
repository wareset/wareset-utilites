/* eslint-disable security/detect-non-literal-regexp */
var regexp = (pattern, flags) => new RegExp(pattern.map ? pattern.map(v => v.source || v).join('') : pattern.source || pattern, flags);

export default regexp;
export { regexp };
