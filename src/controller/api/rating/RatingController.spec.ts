import * as chai from 'chai'
import { describe } from 'mocha'
import RatingController from './RatingController'

const should = chai.should()

describe('RatingController', () => {
  describe('#create', () => {
    const controller = new RatingController()
    let func = () => controller.create(null, null, null)
    func.should.throw(Error)
  })
})
