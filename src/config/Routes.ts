import { Application } from 'express'
import UserController from '../controller/api/user/UserController'
import LocationController from '../controller/api/location/LocationController'
import RatingController from '../controller/api/rating/RatingController'

/**
 * Routes configuration.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Routes {
  private userController = new UserController()
  private locationController = new LocationController()
  private ratingController = new RatingController()

  constructor (app: Application) {
    // User routes
    app.route('/api/user/:id').get(this.userController.getById)
    app.route('/api/user').get(this.userController.getAll)
    app.route('/api/user').post(this.userController.create)
    app.route('/api/user/:id').put(this.userController.update)
    app.route('/api/user/login').post(this.userController.login)
    app.route('/api/user/:id/password-reset').put(this.userController.passwordReset)

    // Location routes
    app.route('/api/location/:id').get(this.locationController.getById)
    app.route('/api/location').get(this.locationController.getAll)
    app.route('/api/location').post(this.locationController.create)
    app.route('/api/location/:id').put(this.locationController.update)

    //  Rating routes
    app.route('/api/rating/:id').get(this.ratingController.getById)
    app.route('/api/rating').get(this.ratingController.getAll)
    app.route('/api/rating').post(this.ratingController.create)
    app.route('/api/rating/:id').put(this.ratingController.update)
  }
}
