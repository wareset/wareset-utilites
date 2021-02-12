'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var replace = require('@wareset-utilites/lang/replace');

var esc = (() => {
  var regexpG = s => new RegExp(s, 'g'); // const replace = (string: string, regexp: RegExp, replacer: string): string =>
  //   string.replace(regexp, replacer)


  var START = '[';
  var MIDDLE = '-.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/';
  var END = ']';
  var DEFAULT_REGEXP = regexpG(START + MIDDLE + END);
  var REPLACER = '\\$&';
  return (string, ignore = '', isNewFn) => {
    var res;
    if (!ignore && !isNewFn) res = replace.replace(string, DEFAULT_REGEXP, REPLACER);else {
      var newMIDDLE = replace.replace(MIDDLE, regexpG(START + esc(ignore) + END));
      var newREGEXP = regexpG(START + newMIDDLE + END);

      var newEscape = string => replace.replace(string, newREGEXP, REPLACER);

      res = isNewFn ? newEscape : newEscape(string);
    }
    return res;
  };
})();

exports.default = esc;
exports.esc = esc;
