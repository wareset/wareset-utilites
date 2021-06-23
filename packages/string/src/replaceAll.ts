import { $EMPTY } from './lib'

import esc from '@wareset-utilites/escape'

const r = RegExp
// prettier-ignore
export const replaceAll: {
  (
    string: string,
    pattern: string | RegExp,
    replacer?: string | ((substring: string, ...args: any[]) => string)
  ): string
} = (string: any, pattern: any, replacer?: any) =>
  string.replace(
    pattern.test
      ? pattern.global
        ? pattern
        : new r(
          pattern.source,
          'g' + (pattern.flags || ($EMPTY + pattern).match(/[gimuy]*$/)![0])
        )
      : new r(esc(pattern as string), 'g'),
    replacer || $EMPTY
  )

export default replaceAll
