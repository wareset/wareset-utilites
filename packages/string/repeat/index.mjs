import { __empty__ } from '../lib';

var repeat = (string, count = 1) => {
  var res = __empty__;
  count = -~count || 0;

  while (--count > 0) {
    res += string;
  }

  return res;
};

export { repeat };
