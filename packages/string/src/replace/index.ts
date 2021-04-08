import { __empty__ } from '../lib'

export const replace = (
  string: string,
  regexp: RegExp,
  replacer: any = __empty__
): string => string.replace(regexp, replacer)
