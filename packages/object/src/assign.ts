import __Object__ from './Object'
import keys from './keys'

export const assign =
  __Object__.assign ||
  (((t: any, ...sources: any[]) => (
    sources.forEach((s) => {
      keys(s).forEach((k) => {
        t[k] = s[k]
      })
    }),
    t
  )) as typeof Object.assign)
export default assign
