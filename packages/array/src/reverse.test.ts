import reverse from './reverse'

test('reverse:', () => {
  expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
})
