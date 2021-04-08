import { some } from '../some'

let undef: undefined
// prettier-ignore
export const find = <T>(
  list: T[],
  callback: (value: T, key: number, list: T[]) => boolean,
  __tmp__?: boolean,
  __tmpRes__?: T
): T | undefined => (
    some(list, (v, k, a) => (__tmp__ = callback((__tmpRes__ = v), k, a))),
    __tmp__ ? __tmpRes__ : undef
  )
