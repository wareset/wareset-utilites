import { setOwnProps } from 'wareset-utilites';

const TEXT_TAGNAMES = {
  TEXT: 'text', // 3
  CDATA: 'cdata', // 4
  COMMENT: 'comment' // 8
};

export const TAGNAMES = {
  ROOT: 'root',

  ...TEXT_TAGNAMES,
  ELEMENT: 'element',

  DOCTYPE: '!doctype',

  STYLE: 'style',
  SCRIPT: 'script'
};

function factoryRoot(tagName, self) {}
function factoryText(tagName, self) {
  const define = setOwnProps(self);
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
  const define = setOwnProps(self);
}

export class __ROOT__ extends Array {
  constructor(...a) {
    super();
    if (a.length) this.push(...a);
    factoryRoot(TAGNAMES.ROOT, this);
  }
}
export class __Text__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryText(TAGNAMES.TEXT, this);
  }
}
export class __CDATA__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryText(TAGNAMES.CDATA, this);
  }
}
export class __Comment__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryText(TAGNAMES.COMMENT, this);
  }
}

export class __Element__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.ELEMENT, this);
  }

  // get __attrs__() {
  //   console.log(12, this);
  //   return 234;
  // }
}
export class __Doctype__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.DOCTYPE, this);
  }
}
export class __Style__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.STYLE, this);
  }
}
export class __Script__ extends __ROOT__ {
  constructor(...a) {
    super(...a);
    factoryElement(TAGNAMES.SCRIPT, this);
  }
}

export const NODE_CLASSES = {
  [TAGNAMES.ROOT]: __ROOT__,

  [TAGNAMES.TEXT]: __Text__,
  [TAGNAMES.CDATA]: __CDATA__,
  [TAGNAMES.COMMENT]: __Comment__,
  [TAGNAMES.ELEMENT]: __Element__,

  [TAGNAMES.DOCTYPE]: __Doctype__,

  [TAGNAMES.STYLE]: __Style__,
  [TAGNAMES.SCRIPT]: __Script__
};
