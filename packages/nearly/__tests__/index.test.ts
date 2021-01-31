import nearly from '../src'

test('wareset-utilites: nearly', () => {
  // If the pattern is an array, returns the nearest value.
  expect(nearly(1.25, [1, 1.24, 1.26, 2])).toBe(1.26)

  expect(nearly(1.25, [1, 1.24, 1.26, 2], -1)).toBe(1.24)
  expect(nearly(1.25, [1, 1.24, 1.26, 2], 0)).toBe(1.26)
  expect(nearly(1.25, [1, 1.24, 1.26, 2], 1)).toBe(1.26)

  expect(nearly(1.25, [], -1)).toBe(1.25)
  expect(nearly(1.25, [], 0)).toBe(1.25)
  expect(nearly(1.25, [], 1)).toBe(1.25)

  // If the pattern is a number, it returns a multiple of it.
  expect(nearly(3040.10576, 150.101)).toBe(3002.02)
  
  expect(nearly(3040.10576, 150.101, -1)).toBe(3002.02)
  expect(nearly(3040.10576, 150.101, 0)).toBe(3002.02)
  expect(nearly(3040.10576, 150.101, 1)).toBe(3152.121)

  // If the pattern is zero, it returns standard rounding.
  expect(nearly(3040.10576, 0, -1)).toBe(Math.floor(3040.10576))
  expect(nearly(3040.10576, 0, 0)).toBe(Math.round(3040.10576))
  expect(nearly(3040.10576, 0, 1)).toBe(Math.ceil(3040.10576))
})
