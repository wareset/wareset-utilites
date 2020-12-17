export const noop = (..._) => {};
export const keys = Object.keys;
export const values = (v) => keys(v).map((k) => v[k]);
export const entries = (v) => keys(v).map((k) => [k, v[k]]);
