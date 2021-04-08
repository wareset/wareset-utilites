import { map } from '@wareset-utilites/array/map'
import { join } from '@wareset-utilites/array/join'

import { __toArrayCase__, __empty__ } from '../lib'
import { toCapitalize } from '../to-capitalize'

export const toCodeCamelcase = (string: string): string =>
  join(
    map(__toArrayCase__(string), (v, k) => (k ? toCapitalize(v) : v)),
    __empty__
  )
