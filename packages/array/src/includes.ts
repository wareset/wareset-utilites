import indexOf from './indexOfLeft'

// prettier-ignore
export const includes: {
  <T>(source: T[], value: T, fromIndex?: number): boolean
  (source: string, value: string, fromIndex?: number): boolean
} = ![].includes
  ? (source: any, value: any, fromIndex?: number): boolean =>
    indexOf(source, value, fromIndex) > -1
  : (source: any, value: any, fromIndex?: number): boolean =>
    source.includes(value, fromIndex)

export default includes
