import { __regexp__, $EMPTY } from '../lib';

var trim = (string, trimer) => trimer ? string.replace(__regexp__(`^[${trimer}]+|[${trimer}]+$`), $EMPTY) : string.trim();

export default trim;
export { trim };
