import { $EMPTY } from '../lib';

var repeat = (r, t) => {
  var o = $EMPTY;

  for (t = -~t || 0; --t > 0;) {
    o += r;
  }

  return o;
};

export default repeat;
export { repeat };
