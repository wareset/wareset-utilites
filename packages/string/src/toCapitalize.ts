import toUppercase from './toUppercase'
import toLowercase from './toLowercase'

export const toCapitalize = (string: string): string =>
  string ? toUppercase(string[0]) + toLowercase(string.slice(1)) : string
export default toCapitalize
