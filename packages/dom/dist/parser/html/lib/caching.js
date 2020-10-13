"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caching = caching;
exports.CACHED_TAGS = void 0;
const rec = /(<style[^]*?>)([^]*?)<\/style>|(<script[^]*?>)([^]*?)<\/script>/gi;
const CACHED_TAGS = {
  style: true,
  script: true
};
exports.CACHED_TAGS = CACHED_TAGS;

function caching(html, options) {
  const CACHE = {};

  if (options.cached) {
    let cacheID = 0;
    html = html.replace(rec, (__, isStyle, style, isScript, script) => {
      const open = isStyle || isScript;
      const content = style || script;
      const close = '</' + (isStyle ? 'style' : 'script') + '>';
      if (content.length < 8) return open + content + close;
      let id;

      do id = 'C' + cacheID++; while (html.indexOf(id) !== -1);

      const key = [...Array(Math.ceil(content.length / id.length))].map(v => id).join('').slice(0, content.length);
      CACHE[key] = content;
      return open + key + close;
    });
  }

  return [html, CACHE];
}