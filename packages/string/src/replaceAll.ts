import { $EMPTY } from './lib'
import { RegExp as __RegExp__ } from '@wareset-utilites/lang/RegExp'
import { esc } from '@wareset-utilites/escape'

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
        : new __RegExp__(
          pattern.source,
          'g' + (pattern.flags || ($EMPTY + pattern).match(/[gimuy]*$/)![0])
        )
      : new __RegExp__(esc(pattern as string), 'g'),
    replacer || $EMPTY
  )

export default replaceAll
