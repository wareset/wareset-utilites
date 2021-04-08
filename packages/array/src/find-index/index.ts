import { some } from '../some'

// prettier-ignore
export const findIndex = <T>(
  list: T[],
  callback: (value: T, key: number, list: T[]) => boolean,
  __tmp__?: boolean,
  __tmpRes__?: number
): number => (
    some(list, (v, k, a) => (__tmp__ = callback(v, (__tmpRes__ = k), a))),
    __tmp__ ? __tmpRes__! : -1
  )
