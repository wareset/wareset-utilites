export const hash = (str) => {
  str = ('' + str).replace(/\r/g, '');
  let hash = 999999999999989; // 604661760000000;
  let i = str.length;
  while (i--) hash += (hash << 33) * str.charCodeAt(i);
  return (hash < 0 ? -hash : hash).toString(36);
};
