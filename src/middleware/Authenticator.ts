import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import User from '../model/User'
import Secrets from '../config/Secrets'

export default class Authenticator {
  static authenticate (req: Request, res: Response, next: NextFunction) {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(403).send({ auth: false, token: null })
        } else {
          const token = jwt.sign({ id: user.id }, Secrets.apiKey, {
            expiresIn: 86400 // expires in 24 hours
          })

          res.send({ auth: true, token: token })
        }
      })
      .catch(error => res.json(error))

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
