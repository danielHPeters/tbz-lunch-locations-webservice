import { Request, Response, NextFunction } from 'express'
import Controller from '../../Controller'
import User from '../../../model/User'
import UUID from '../../../helper/UUID'
import * as bcrypt from 'bcrypt'

/**
 * User controller.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class UserController implements Controller {
  create (req: Request, res: Response, next: NextFunction): void {
    User.create({
      id: UUID.random(),
      password: bcrypt.hashSync(req.body.password, 8),
      name: req.body.name,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      email: req.body.email
    })
      .then(response => res.json(response))
      .catch(err => res.json(err))
  }

  getById (req: Request, res: Response, next: NextFunction): void {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.json(err))
  }

  getAll (req: Request, res: Response, next: NextFunction): void {
    User.findAll({
      attributes: {
        exclude: ['password']
      }
    }).then(users => res.json(users))
      .catch(err => res.json(err))
  }

  update (req: Request, res: Response, next: NextFunction): void {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(response => res.json(response))
      .catch(err => res.json(err))
  }

  login (req: Request, res: Response, next: NextFunction): void {
    res.json({ message: 'Hello World!' })
  }

  passwordUpdate (req: Request, res: Response, next: NextFunction): void {
    res.json({ message: 'Hello World!' })
  }
}
