import { Request, Response, NextFunction } from 'express'
import Controller from '../../Controller'
import User from '../../../model/User'
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
      password: bcrypt.hashSync(req.body.password, 8),
      name: req.body.name,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      email: req.body.email
    })
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  }

  getById (req: Request, res: Response, next: NextFunction): void {
    User.findByPk(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.json(err))
  }

  getAll (req: Request, res: Response, next: NextFunction): void {
    User.findAll({
      attributes: {
        exclude: ['password']
      }
    }).then(users => {
      console.log('Hi')
      console.log(JSON.stringify(users))
      res.json(users)
    })
      .catch(err => {
        console.log('Hi')
        console.log(err)
        res.json(err)
      })
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
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        const valid = bcrypt.compareSync(req.body.password, user!.password)
        res.status(valid ? 200 : 403).json(valid ? user : new Error('Login Failed'))
      })
      .catch(error => res.status(403).json(error))
  }

  passwordUpdate (req: Request, res: Response, next: NextFunction): void {
    res.json({ message: 'Hello World!' })
  }
}
