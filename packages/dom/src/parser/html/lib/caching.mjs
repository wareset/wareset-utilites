const rec = /(<style[^]*?>)([^]*?)<\/style>|(<script[^]*?>)([^]*?)<\/script>/gi;

export const CACHED_TAGS = { style: true, script: true };

export function caching(html, options) {
  const CACHE = {};

  if (options.cached) {
    let cacheID = 0;
    html = html.replace(rec, (__, isStyle, style, isScript, script) => {
      const open = isStyle || isScript;
      const content = style || script;
      const close = '</' + (isStyle ? 'style' : 'script') + '>';
      if (content.length < 8) return open + content + close;

      let id;
      do id = 'C' + cacheID++;
      while (html.indexOf(id) !== -1);

      const key = [...Array(Math.ceil(content.length / id.length))]
        .map(v => id)
        .join('')
        .slice(0, content.length);

      CACHE[key] = content;
      return open + key + close;
    });
  }

  return [html, CACHE];
}
