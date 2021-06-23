import spliceBetween from './spliceBetween'

test('spliceBetween:', () => {
  expect(spliceBetween([1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 6)).toEqual([])
  expect(spliceBetween([1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 8)).toEqual([6, 7, 8])

  expect(spliceBetween([1, 2, 3, 4, 5, 6, 7, 8, 9], -4, 6)).toEqual([])
  expect(spliceBetween([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 11)).toEqual([])
  expect(spliceBetween([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 2)).toEqual([])
})
