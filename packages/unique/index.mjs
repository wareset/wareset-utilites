import { indexOf } from '@wareset-utilites/array';
import { includes } from '@wareset-utilites/array/includes'; // function globals() {

var unique = (list, filter = ['', NaN, null, undefined]) => list.filter((v, k, a) => indexOf(a, v) === k && !includes(filter, v));

export default unique;
export { unique };
