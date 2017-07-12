const chai = require('chai')
const example = require('../example')

should = chai.should()

describe('my first test "Hello!!!"', () => {
  const s = example.test()
  it('should be 12', () => {
    s.should.equal(12)
  })
  it('should be a number', () => {
    s.should.be.a('number')
  })
})