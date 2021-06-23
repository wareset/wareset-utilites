import regexp from './index'

test('wareset-utilites: regexp', () => {
  expect(regexp('\\s')).toEqual(/\s/)
  expect(regexp('\\s', 'g')).toEqual(/\s/g)
  expect(regexp(['\\s', 'a'])).toEqual(/\sa/)
  expect(regexp(['\\s', 'a', /b/], 'g')).toEqual(/\sab/g)
  expect(regexp(['\\s', 'a', /b/gim, 'go'])).toEqual(/\sabgo/)
})
