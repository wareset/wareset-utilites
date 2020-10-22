const CACHE_SEPARATORS = {};
const CACHE_SOURCES = {};
const CACHE_REGEXPS = {};

const noop = v => v;

const CREATE_SEPARATOR = v => {
  v = v.source || (v ? `[${v}]` : '');
  return new RegExp(`(${v})`);
};

const CREATE_SOURCE = v => {
  v = ((v && v.source) || v || '?:').split('|').map(v => `(${v})`);
  return [v.length, v.join('|')];
};

const CREATE_REGEXP = (q1, q2) => {
  return new RegExp(`(\\\\?')|(\\\\?")|(\\\\?\`)|${q1}|${q2}`, 'g');
};

const QUOTES = '\'"`';
const SAFER = '\0';
const REG_ADD_SAFE = new RegExp(`(\\w)([${QUOTES}])(\\w)`, 'g');
const __ADD_SAFE__ = v => v.replace(REG_ADD_SAFE, `$1$2${SAFER}$2$3`);
const REG_DEL_SAFE = new RegExp(`[${QUOTES}]${SAFER}|${SAFER}[${QUOTES}]`, 'g');
const __DEL_SAFE__ = v => v.replace(REG_DEL_SAFE, '');

const __split__ = (str, SEPARATOR, REGEXP, l1, l2, isSafeSingles) => {
  const step = (str.match(SEPARATOR) || []).length;
  if (!step) return [str];

  const res = [];

  let DEL_SAFE = noop;
  if (isSafeSingles) (str = __ADD_SAFE__(str)), (DEL_SAFE = __DEL_SAFE__);

  const data = str.split(SEPARATOR);
  let column, index, pusher;
  for (let i = 0; i < data.length; i += step) {
    pusher = '';

    let isQuote = false;
    const matches = [];
    do {
      column = data[i];

      column.replace(REGEXP, (...a) => {
        a.slice(1, -2).forEach((v, k, a) => {
          if (!v || (k <= 2 && v.length > 1)) return;
          if (isQuote === false) {
            if (k <= 2) isQuote = k;
            if (k <= l2) matches.push(k);
            else if ((index = matches.indexOf(k - l1)) > -1) {
              matches.splice(index, 1);
            }
          } else if (k === isQuote) matches.pop(), (isQuote = false);
        });
      });

      pusher += column;
      if (matches.length) {
        (pusher += data[i + 1]), (i += step);
        if (i >= data.length) throw new Error();
      }
    } while (matches.length);

    res.push(DEL_SAFE(pusher));
  }

  return res;
};

export default function smartsplit(
  str,
  s = /\s*(,)\s*/,
  q1,
  q2,
  isSafeSingles = true,
  isNewFn
) {
  s = CACHE_SEPARATORS[s] || (CACHE_SEPARATORS[s] = CREATE_SEPARATOR(s));

  let l1, l2;
  if (!q2) q2 = q1;
  [l1, q1] = CACHE_SOURCES[q1] || (CACHE_SOURCES[q1] = CREATE_SOURCE(q1));
  [l2, q2] = CACHE_SOURCES[q2] || (CACHE_SOURCES[q2] = CREATE_SOURCE(q2));
  if (l1 !== l2) throw new Error();
  l2 += 2;

  const k = q1 + SAFER + q2;
  const REGEXP = CACHE_REGEXPS[k] || (CACHE_REGEXPS[k] = CREATE_REGEXP(q1, q2));

  const res = str => __split__(str, s, REGEXP, l1, l2, isSafeSingles);
  return isNewFn ? res : res(str);
}
