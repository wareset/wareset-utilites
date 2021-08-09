import { RegExp } from '@wareset-utilites/lang/RegExp';

var regexp = (p, r) => new RegExp(p.map ? p.map(e => e.source || e).join('') : p.source || p, r);

export default regexp;
export { regexp };
