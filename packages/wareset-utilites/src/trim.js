export const trim = (str = '', trimer = '\\s') => {
  return str.replace(new RegExp(`^[${trimer}]+|[${trimer}]+$`, 'gi'), '');
};

export const trimLeft = (str = '', trimer = '\\s') => {
  return str.replace(new RegExp(`^[${trimer}]+`, 'gi'), '');
};

export const trimRight = (str = '', trimer = '\\s') => {
  return str.replace(new RegExp(`[${trimer}]+$`, 'gi'), '');
};
