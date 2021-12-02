import { Promise } from '@wareset-utilites/lang/Promise'
import { setTimeout as __setTimeout__ } from '@wareset-utilites/lang/setTimeout'

export const timeout: {
  (msec?: number): true
  <T>(callback: (...a: any[]) => Promise<T> | T, msec?: number): Promise<T>
} = (callback?: any, msec?: any): any =>
  new Promise((resolve) => {
    __setTimeout__(
      () => resolve(typeof callback !== 'function' || callback()),
      +callback || +msec || 0
    )
  })

export default timeout
