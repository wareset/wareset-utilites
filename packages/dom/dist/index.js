"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "concise", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});
Object.defineProperty(exports, "attributes", {
  enumerable: true,
  get: function () {
    return _index3.default;
  }
});
exports.parser = void 0;

var _index = _interopRequireDefault(require("./parser/html/index.js"));

var _index2 = _interopRequireDefault(require("./parser/concise/index.js"));

var _index3 = _interopRequireDefault(require("./parser/attributes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = {
  html: _index.default,
  concise: _index2.default,
  attributes: _index3.default
};
exports.parser = parser;