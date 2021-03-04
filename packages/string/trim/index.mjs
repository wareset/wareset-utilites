import { replace } from '../replace';
import { __regexp__ } from '../lib';

var trim = (string, trimer) => trimer ? replace(string, __regexp__(`^[${trimer}]+|[${trimer}]+$`)) : string.trim();

export { trim };
