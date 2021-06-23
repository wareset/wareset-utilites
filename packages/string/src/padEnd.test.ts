import padEnd from './padEnd'

test('padEnd:', () => {
  expect(padEnd('12345', 10, '')).toBe('12345')
  expect(padEnd('12345', 5)).toBe('12345')
  expect(padEnd('12345', 10)).toBe('12345     ')
  expect(padEnd('12345', 10, '6')).toBe('1234566666')
  expect(padEnd('12345', 10, '67')).toBe('1234567676')
  expect(padEnd('12345', 10, '678')).toBe('1234567867')
  expect(padEnd('12345', 10, '6789')).toBe('1234567896')
  expect(padEnd('12345', 10, '67890')).toBe('1234567890')
  expect(padEnd('12345', 10, '678900')).toBe('1234567890')
})
