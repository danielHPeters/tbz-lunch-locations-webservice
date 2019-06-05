import * as chai from 'chai'
import { describe } from 'mocha'

chai.should()

describe('RatingController', () => {
  describe('#create', () => {
    let func = () => {
      throw new Error('Test')
    }
    func.should.throw(Error)
  })
})
