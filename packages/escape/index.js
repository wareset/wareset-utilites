'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/* eslint-disable max-len */

/* eslint-disable security/detect-non-literal-regexp */

var esc = (() => {
  var undef;

  var regexpG = s => new RegExp(s, 'g');

  var START = '[';
  var MIDDLE = '-.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/';
  var END = ']';
  var DEFAULT_REGEXP = regexpG(START + MIDDLE + END);
  var REPLACER = '\\$&';
  return (string, ignore, isNewFn) => {
    if (ignore === undef) ignore = '';
    var res;
    if (!ignore && !isNewFn) res = string.replace(DEFAULT_REGEXP, REPLACER);else {
      // prettier-ignore
      var newMIDDLE = MIDDLE.replace(regexpG(START + esc(ignore) + END), '');
      var newREGEXP = regexpG(START + newMIDDLE + END);

      var newEscape = string => string.replace(newREGEXP, REPLACER);

      res = isNewFn ? newEscape : newEscape(string);
    }
    return res;
  };
})();

exports.default = esc;
exports.esc = esc;
