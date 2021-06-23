import indexOf from './indexOfLeft'

test('indexOfLeft:', () => {
  expect(indexOf([1, 2, 3, 4, 5], 1)).toBe(0)
  expect(indexOf([1, 2, 3, 4, 5], 3)).toBe(2)
  expect(indexOf([1, 2, 3, 4, 5], 6)).toBe(-1)
  expect(indexOf([1, 2, 3, 4, 5], NaN)).toBe(-1)
  expect(indexOf([1, 2, 3, NaN, 5], NaN)).toBe(3)

  expect(indexOf('asd', 'a')).toBe(0)
  expect(indexOf('asd', 's')).toBe(1)
  expect(indexOf('asd', 'f')).toBe(-1)
  expect(indexOf('asd', NaN as any)).toBe(-1)
})
