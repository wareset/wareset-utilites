import { typeOf } from '@wareset-utilites/lang/type-of';

var isSymbol = v => typeOf(v, 'symbol');

export { isSymbol };
