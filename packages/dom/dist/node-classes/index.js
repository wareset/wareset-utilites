"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NODE_CLASSES = exports.__Script__ = exports.__Style__ = exports.__Doctype__ = exports.__Element__ = exports.__Comment__ = exports.__CDATA__ = exports.__Text__ = exports.__ROOT__ = exports.TAGNAMES = void 0;

function _waresetUtilites() {
  const data = require("wareset-utilites");

  _waresetUtilites = function () {
    return data;
  };

  return data;
}

const TEXT_TAGNAMES = {
  TEXT: 'text',
  // 3
  CDATA: 'cdata',
  // 4
  COMMENT: 'comment' // 8

};
const TAGNAMES = {
  ROOT: 'root',
  ...TEXT_TAGNAMES,
  ELEMENT: 'element',
  DOCTYPE: '!doctype',
  STYLE: 'style',
  SCRIPT: 'script'
};
exports.TAGNAMES = TAGNAMES;

function factoryRoot(tagName, self) {}

function factoryText(tagName, self) {
  const define = (0, _waresetUtilites().setOwnProps)(self);
  console.log(tagName);
  define({
    tag: {
      enumerable: 1,
      get: () => `<#${tagName}>`,
      set: v => {}
    }
  });
}

function factoryElement(tagName, self) {
  const define = (0, _waresetUtilites().setOwnProps)(self);
}

class __ROOT__ extends Array {
  constructor(...a) {
    super();
    if (a.length) this.push(...a);
    factoryRoot(TAGNAMES.ROOT, this);
  }

}

exports.__ROOT__ = __ROOT__;

class __Text__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryText(TAGNAMES.TEXT, this);
  }

}

exports.__Text__ = __Text__;

class __CDATA__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryText(TAGNAMES.CDATA, this);
  }

}

exports.__CDATA__ = __CDATA__;

class __Comment__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryText(TAGNAMES.COMMENT, this);
  }

}

exports.__Comment__ = __Comment__;

class __Element__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.ELEMENT, this);
  } // get __attrs__() {
  //   console.log(12, this);
  //   return 234;
  // }


}

exports.__Element__ = __Element__;

class __Doctype__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.DOCTYPE, this);
  }

}

exports.__Doctype__ = __Doctype__;

class __Style__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.STYLE, this);
  }

}

exports.__Style__ = __Style__;

class __Script__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.SCRIPT, this);
  }

}

exports.__Script__ = __Script__;
const NODE_CLASSES = {
  [TAGNAMES.ROOT]: __ROOT__,
  [TAGNAMES.TEXT]: __Text__,
  [TAGNAMES.CDATA]: __CDATA__,
  [TAGNAMES.COMMENT]: __Comment__,
  [TAGNAMES.ELEMENT]: __Element__,
  [TAGNAMES.DOCTYPE]: __Doctype__,
  [TAGNAMES.STYLE]: __Style__,
  [TAGNAMES.SCRIPT]: __Script__
};
exports.NODE_CLASSES = NODE_CLASSES;