"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseAttributes;

function _split() {
  const data = _interopRequireDefault(require("@wareset-utilites/split"));

  _split = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} attrs
 * @return {Array}
 */
function parseAttributes(attrs) {
  const res = [];
  console.log(attrs);
  (0, _split().default)(attrs || '', /(,|\s|\n)+/, /\(|\[|\{|"|'|`/, /\)|\]|\}|"|'|`/).forEach(v => {
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