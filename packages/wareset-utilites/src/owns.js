import { each } from './each';
import { isUndef, isObjStrict } from './is';

export const hasOwnProp = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
export const getOwnProp = Object.getOwnPropertyDescriptor;
export const getOwnPropNames = Object.getOwnPropertyNames;
export const getOwnProps =
  // Object.getOwnPropertyDescriptors ||
  (o) => {
    const res = {};
    getOwnPropNames(o).forEach((k) => (res[k] = getOwnProp(o, k)));
    return res;
  };

export const setOwnProp = (object, ...args) => {
  const define = (...args) => {
    if (args.length) {
      let [key, props, writable, enumerable] = args;
      if (
        !isObjStrict(props) ||
        !('get' in props || 'set' in props || 'value' in props)
      ) {
        props = { value: props };
      }
      props = {
        enumerable: !!enumerable,
        configurable: true,
        writable: true,
        ...props
      };
      if (props.get || props.set) delete props.writable;
      else if (!isUndef(writable)) props.writable = !!writable;
      Object.defineProperty(object, key, props);
    }
    return define;
  };
  return define(...args);
};

export const setOwnProps = (object, props = undefined) => {
  const define = setOwnProp(object);
  const defines = (props) => {
    if (props) each(props, (v, k) => define(k, v));
    return defines;
  };
  return defines(props);
};
