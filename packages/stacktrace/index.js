'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var stacktrace = () => ('' + Error().stack).split(/\s*\n+\s*/).slice(2);

exports.default = stacktrace;
exports.stacktrace = stacktrace;
