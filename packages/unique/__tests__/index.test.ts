/* eslint-disable max-len */

import unique from '../src'

test('wareset-utilites: unique', () => {
  expect(unique([1, 2, '', NaN, null, void 0, 1, 2, 3])).toEqual([1, 2, '', 3])
  expect(unique([1, 2, '', NaN, null, 1], ['', null])).toEqual([1, 2, NaN])
})
