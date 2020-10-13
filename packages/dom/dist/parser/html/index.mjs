// import parseAttributes from '../attributes/index.mjs';
import { caching, CACHED_TAGS } from './lib/caching.mjs';
import { NODE_CLASSES, TAGNAMES } from '../../node-classes/index.mjs';
const regexp = /(<!\[CDATA\[|\]\]>|<!--|-->|<?\/>|<\/?(!?[{a-zA-Z][\w-}]*)>?)/g;
const DEFAULT_OPTIONS = {
  strict: true,
  cached: true,
  comments: true,
  cdata: true
};
const COMMENT_OPEN = '<!--';
const COMMENT_CLOSE = '-->';
const CDATA_OPEN = '<![CDATA[';
const CDATA_CLOSE = ']]>';
const SAMELESS_CLOSE = '/>';
const CUSTOM_CLOSE = '</>';
const ONLY_CLOSE = '>';
export const parseHtmlDirty = (html, options) => {
  options = { ...DEFAULT_OPTIONS,
    ...(options || {})
  };
  let CACHE;
  [html, CACHE] = caching(html, options);
  if (options.comments && ~html.indexOf(COMMENT_OPEN)) html += COMMENT_CLOSE;
  if (options.cdata && ~html.indexOf(CDATA_OPEN)) html += CDATA_CLOSE;
  html = `<${TAGNAMES.ROOT}>${html}</${TAGNAMES.ROOT}>`; // console.log(html);

  const data = [];
  html.replace(regexp, (__, tag, tagName, pos) => {
    if (tagName) tagName = tagName.toLowerCase();
    const arr = [tag, tagName, pos];
    data.push(arr);

    if (tagName === TAGNAMES.DOCTYPE) {
      const cTag = '</' + tag.slice(1);
      data.push([cTag, tagName, html.indexOf(ONLY_CLOSE, pos) - tag.length]);
    }
  });
  let validDeep = 0;
  const res = [];
  let current = res;
  let lastPos = html.length;
  let arr = [];
  let text = true;
  let isComment = false;
  let isCDATA = false;
  let wholeText;

  for (let i = data.length; (i -= 1) >= 0; undefined) {
    if (isComment && options.comments) {
      comment: for (let i2 = i + 1; (i2 -= 1) >= 0; undefined) {
        if (data[i2][0] === COMMENT_CLOSE) break comment;
        if (data[i2][0] === COMMENT_OPEN) i = i2;
      }
    }

    if (isCDATA && options.cdata) {
      cdata: for (let i2 = i + 1; (i2 -= 1) >= 0; undefined) {
        if (data[i2][0] === CDATA_CLOSE) break cdata;
        if (data[i2][0] === CDATA_OPEN) i = i2;
      }
    }

    let [tag, tagName, pos] = data[i];

    if (tag === COMMENT_CLOSE && options.comments) {
      let is;

      comment: for (let i2 = i; (i2 -= 1) >= 0; undefined) {
        if (data[i2][0] === COMMENT_CLOSE) break comment;
        if (data[i2][0] === COMMENT_OPEN && (is = 1)) break comment;
      }

      if (!is) continue;
    }

    if (tag === CDATA_CLOSE && options.cdata) {
      let is;

      cdata: for (let i2 = i; (i2 -= 1) >= 0; undefined) {
        if (data[i2][0] === CDATA_CLOSE) break cdata;
        if (data[i2][0] === CDATA_OPEN && (is = 1)) break cdata;
      }

      if (!is) continue;
    } // console.log(tag, tagName, pos);
    // console.log([tag, tagName, pos]);


    if (current.tagName) {
      wholeText = html.slice(pos + tag.length, lastPos);
      if (current.tagName === TAGNAMES.COMMENT) text = current;else if (current.tagName === TAGNAMES.CDATA) text = current;else {
        if (!current.children) current.children = [];
        if (!text) current.children.shift();
        text = new NODE_CLASSES[TAGNAMES.TEXT](), text.__parent__ = current;
        text.start = pos + tag.length, text.end = lastPos;
        text.tagName = TAGNAMES.TEXT;
        if (text.start !== text.end) current.children.unshift(text);
      }
      text.wholeText = wholeText; // (text.tag = '<#' + text.tagName + '>');

      if (current.tagName in CACHED_TAGS && wholeText in CACHE) {
        text.wholeText = CACHE[wholeText];
      }
    }

    text = false;

    if (tag[1] === '/' || tag === SAMELESS_CLOSE || tag === COMMENT_CLOSE || tag === CDATA_CLOSE) {
      if (tag === '/>' && !(data[i - 1] && data[i - 1][1] !== '/')) continue;

      if (tag === COMMENT_CLOSE && options.comments) {
        tagName = TAGNAMES.COMMENT, isComment = true;
      } else if (tag === CDATA_CLOSE && options.cdata) {
        tagName = TAGNAMES.CDATA, isCDATA = true;
      }

      arr = new (NODE_CLASSES[tagName] || NODE_CLASSES[TAGNAMES.ELEMENT])();
      arr.__parent__ = current;
      arr.tagName = tagName || tag, arr.end = pos + tag.length;
      (current.children || (current.children = [])).unshift(arr);
      current = arr;
      ++validDeep;
    } else {
      if (tagName !== current.tagName) {
        if (current.tagName === CUSTOM_CLOSE) {
          current.tagName = tagName;
        } else if (current.tagName === SAMELESS_CLOSE) {
          current.tagName = tagName;
          current.sameless = true;
        } else if (current.tagName !== TAGNAMES.CDATA && current.tagName !== TAGNAMES.COMMENT) {
          continue;
        }
      }

      current.start = pos;
      current.tag = tag;

      if (current.tagName === TAGNAMES.CDATA || current.tagName === TAGNAMES.COMMENT) {
        current.tag = '<#' + current.tagName + '>';
        console.log(111, current.tag);
      } // console.log(2222, current);


      current = current.__parent__;
      --validDeep;
    }

    text = true;
    lastPos = pos;
  }

  console.log('validDeep', validDeep);
  if (options.strict && validDeep) throw new Error(validDeep);
  return res.children[0];
};

const __walk__ = (ast, cb, __parent__, key) => {
  cb(ast, __parent__, key || 0);

  if (ast.children) {
    for (let i = 0; i < ast.children.length; i++) {
      __walk__(ast.children[i], cb, ast, i);
    }
  }

  return ast;
};

export const walk = (ast, cb) => __walk__(ast, cb);
export const parseHtml = (html, options) => {
  const tree = parseHtmlDirty(html, options);
  let ID = 0;
  walk(tree, (node, parent) => {
    // console.log(node, parent);
    if (node.tag && node.tag[node.tag.length - 1] !== ONLY_CLOSE) {
      const [attrs, ...content] = node.children[0].wholeText.split(ONLY_CLOSE); // node.attrs = parseAttributes(attrs);

      node.children[0].wholeText = content.join(ONLY_CLOSE);
      node.tag += attrs;
      node.tag += !node.sameless ? ONLY_CLOSE : SAMELESS_CLOSE;
      node.children[0].start += attrs.length + 1;
      if (node.children[0].wholeText === '') node.children.splice(0, 1);
    }

    if (node.tag) node.id = ID++;
    delete node.__parent__;
    Object.defineProperty(node, 'parent', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: parent
    }); // console.log([html.slice(node.start, node.end)], node);
  });
  return tree;
};