var findIndex = (list, callback, _) => list.some((v, k, a) => callback(v, _ = k, a)) ? _ : -1;

export { findIndex };
