import { Application } from 'express'
import UserController from '../controller/api/user/UserController';
import LocationController from '../controller/api/location/LocationController';
import RatingController from '../controller/api/rating/RatingController';

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
    app.route('api/user/login').post()
    app.route('api/user').post()
    app.route('api/user/:id').get()

    // Location routes
    app.route('api/location/:id').get()
    app.route('api/location').post()
    app.route('api/location/:id').put()

    // 
  }
}
