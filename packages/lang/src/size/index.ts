import { length } from '../length'

export const size = (v: Map<any, any> | Set<any> | any, _?: number): number =>
  (_ = v.size) == null ? length(v) : _
