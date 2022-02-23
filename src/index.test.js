import sumIf from '.'

describe('sumIf()', () => {
  test('with empty array', () => {
    const actual = []
    const expected = 0
    const fn = () => true

    expect(sumIf(actual, fn)).toEqual(expected)
  })

  test('sum values greather than or equal 300', () => {
    const actual = [100, 200, 300, 400, 500]
    const expected = 1200
    const fn = value => value >= 300

    expect(sumIf(actual, fn)).toEqual(expected)
  })

  test('sum odd values', () => {
    const actual = [1, 2, 3, 4, 5, 6]
    const expected = 12
    const fn = value => value % 2 === 0

    expect(sumIf(actual, fn)).toEqual(expected)
  })

  test('Concact string wth length igual 2', () => {
    const actual = ['aa', 'bbb', 'cc', 'dd', 'e']
    const expected ='aaccdd'
    const initial = ''
    const fn = value => value.length === 2

    expect(sumIf(actual, fn, initial)).toEqual(expected)
  })
})
