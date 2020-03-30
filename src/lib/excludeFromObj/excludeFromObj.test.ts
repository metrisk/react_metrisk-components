import 'mocha'
import { expect } from 'chai'
import { excludeFromObj } from '.'

describe('----- Exclude From Object -----', () => {
  it('Removes keys from an object', () => {
    const obj = { a: 'A', b: 'B', c: 'C' }
    const result = excludeFromObj(obj, ['a', 'b'])
    const expected = { c: 'C' }

    expect(result).to.deep.equal(expected)
  })
})