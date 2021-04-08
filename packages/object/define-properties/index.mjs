import { object } from '../object';
import { keys } from '../keys';
import { defineProperty } from '../define-property';

var defineProperties = object.defineProperties || ((o, props) => keys(props).map(key => defineProperty(o, key, props[key])));

export { defineProperties };
