import { typeOf } from '@wareset-utilites/lang/type-of';

var isSymbol = value => typeOf(value, 'symbol');

export { isSymbol };
