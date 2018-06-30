import { Request, Response, NextFunction } from 'express'

export default class Authenticator {
  static isAuthenticated (req: Request, res: Response, next: NextFunction) {
    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    /*if (req.user.authenticated) {
      return next()
    }*/

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.sendStatus(403)
  }
}
