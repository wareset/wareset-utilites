var undef;

var find = (list, cb, _) => list.some((v, k, a) => cb(_ = v, k, a)) ? _ : undef;

export { find };
