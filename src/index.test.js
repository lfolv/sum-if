import sumIf from '.'

describe('sumIf()', () => {
  test('with empty array', () => {
    const actual = []
    const expected = []
    const fn = () => true

    expect(sumIf(actual, fn)).toEqual(expected)
  })
})
