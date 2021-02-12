import { keys } from '../keys'

export const values = (value: any): any[] => keys(value).map((k) => value[k])
