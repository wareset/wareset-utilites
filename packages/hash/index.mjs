var hash = (t, e) => {
  var r = 0,
      h = (t = ((e || '') + t).replace(/\r/g, '')).length;

  for (; h--;) {
    r = (256 * r + t.charCodeAt(h)) % 2147483647;
  }

  return (-r >>> 0).toString(36);
};

export default hash;
export { hash };
