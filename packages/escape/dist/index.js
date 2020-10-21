"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;
const START = '[';
const STR = '.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/';
const END = '-]';
const DEFAULT_REGEXP = new RegExp(START + STR + END, 'g');
const REPLACER = '\\$&';

function escape(str, ignore, isNewFn) {
  if (!ignore) return (str + '').replace(DEFAULT_REGEXP, REPLACER);
  const newSTR = STR.replace(new RegExp(START + escape(ignore) + END, 'g'), '');
  const newREGEXP = new RegExp(START + newSTR + END, 'g');

  const newEscape = str => (str + '').replace(newREGEXP, REPLACER);

  return isNewFn ? newEscape : newEscape(str);
}