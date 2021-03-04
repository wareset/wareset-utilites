const lower = ''.toLocaleLowerCase || ''.toLowerCase
export const toLowercase = (string: string): string => lower.call(string)
