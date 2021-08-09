import { __regexp__, $EMPTY } from '../lib';

var trim = (i, m) => m ? i.replace(__regexp__(`^[${m}]+|[${m}]+$`), $EMPTY) : i.trim();

export default trim;
export { trim };
