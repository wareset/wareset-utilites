const upper = ''.toLocaleUpperCase || ''.toUpperCase
export const toUppercase = (string: string): string => upper.call(string)
