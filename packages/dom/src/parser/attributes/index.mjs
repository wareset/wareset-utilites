import wuSplit from '@wareset-utilites/split';

/**
 * @param {string} attrs
 * @return {Array}
 */
export default function parseAttributes(attrs) {
  const res = [];
  console.log(attrs);
  wuSplit(
    attrs || '',
    /(,|\s|\n)+/,
    /\(|\[|\{|"|'|`/,
    /\)|\]|\}|"|'|`/
  ).forEach(v => {
    // console.log(v);
    if (!v) return;
    v = v.split('=');
    let value;
    try {
      value = v[1] === undefined ? true : JSON.parse(v[1]);
    } catch (err) {
      value = v[1];
    }
    res[v[0]] = value;
  });

  console.log(res);
  return res;
}
