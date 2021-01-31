import unique from '../src'

test('wareset-utilites: unique', () => {
  expect(unique([1, 2, '', NaN, null, undefined, 1, 2, 3])).toEqual([1, 2, 3])
  expect(unique([1, 2, '', NaN, null, 1], [NaN, null])).toEqual([1, 2, ''])
})
