import { indexOf } from '@wareset-utilites/lang/index-of';
import { includes } from '@wareset-utilites/lang/includes'; // function globals() {

var unique = (list, filter = ['', NaN, null, undefined]) => list.filter((v, k, a) => indexOf(a, v) === k && !includes(filter, v));

export default unique;
export { unique };
