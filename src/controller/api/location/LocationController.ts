import { Request, Response, NextFunction } from 'express'
import Controller from '../../Controller'
import Location from '../../../model/Location'

/**
 * Location controller class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class LocationController implements Controller {
  create (req: Request, res: Response, next: NextFunction): void {
    Location.create(req.body)
      .then(response => res.json(response))
      .catch(err => res.json(err))
  }

  getById (req: Request, res: Response, next: NextFunction): void {
    Location.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.json(err))
  }

  getAll (req: Request, res: Response, next: NextFunction): void {
    Location.findAll()
      .then(users => res.json(users))
      .catch(err => res.json(err))
  }

  update (req: Request, res: Response, next: NextFunction): void {
    Location.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(response => res.json(response))
      .catch(err => res.json(err))
  }
}
