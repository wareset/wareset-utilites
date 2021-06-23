import { $EMPTY } from '../lib';

var repeat = (string, count) => {
  var res = $EMPTY;
  count = -~count || 0;

  while (--count > 0) {
    res += string;
  }

  return res;
};

export default repeat;
export { repeat };
