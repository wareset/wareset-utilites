/* eslint-disable security/detect-non-literal-regexp */
var $EMPTY = '';
var $DASH = '-';
var $SPACE = ' ';
var $UNDERSCORE = '_';
var __trimer__ = '\\s';

var __regexp__ = s => new RegExp(s, 'g');

var lowercase = $EMPTY.toLocaleLowerCase || $EMPTY.toLowerCase;

var toLowercase = string => lowercase.call(string);

var uppercase = $EMPTY.toLocaleUpperCase || $EMPTY.toUpperCase;

var toUppercase = string => uppercase.call(string);

var __regPCA__ = /[\d$]/;

var __toArrayCase__ = s => {
  s += $DASH;
  var len = s.length;
  var i = -1;
  var current = $EMPTY;
  var words = [];
  var isUL;
  var isBreak = !isUL;
  var char, charUpper, charLower;

  while (++i < len) {
    char = s.charAt(i);
    charLower = toLowercase(char);
    charUpper = toUppercase(char);

    if (charUpper !== charLower || __regPCA__.test(char)) {
      if (isBreak || !isUL !== (char === charUpper)) {
        if (current) {
          if (current.length > 1) current += $DASH;
          words.push(current);
        }

        current = charLower;
      } else current += charLower;

      isUL = isBreak || isUL || char !== charUpper;
      isBreak = false;
    } else {
      if (current) {
        if (current.length > 1) current = $DASH + current + $DASH;
        words.push(current), current = $DASH;
      } // if (test(__regPCA__, char)) current += charLower


      isBreak = true;
    }
  }

  words = words.join($EMPTY).split($DASH).filter(v => !!v); // console.log(s, words)

  return words;
};

export { $DASH, $EMPTY, $SPACE, $UNDERSCORE, __regexp__, __toArrayCase__, __trimer__, toLowercase, toUppercase };
