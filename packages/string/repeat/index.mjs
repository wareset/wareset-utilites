var repeat = (string, count = 1) => {
  var res = '';
  count = -~count || 0;

  while (--count > 0) {
    res += string;
  }

  return res;
};

export { repeat };
