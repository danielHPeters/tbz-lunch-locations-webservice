import { Request, Response, NextFunction } from 'express'
import Controller from '../../Controller'
import Rating from '../../../model/Rating'

/**
 * Rating controller class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class RatingController implements Controller {
  create (req: Request, res: Response, next: NextFunction): void {
    Rating.create(req.body)
      .then(response => res.json(response))
      .catch(err => res.json(err))
  }

  getById (req: Request, res: Response, next: NextFunction): void {
    Rating.findByPk(req.params.id)
      .then(rating => res.json(rating))
      .catch(err => res.json(err))
  }

  getByUserId (req: Request, res: Response, next: NextFunction): void {
    Rating.findAll({ where: { userId: req.params.userId } })
      .then(rating => res.json(rating))
      .catch(err => res.json(err))
  }

  getByLocationId (req: Request, res: Response, next: NextFunction): void {
    Rating.findAll({ where: { locationId: req.params.locationId } })
      .then(rating => res.json(rating))
      .catch(err => res.json(err))
  }

  getAll (req: Request, res: Response, next: NextFunction): void {
    Rating.findAll()
      .then(ratings => res.json(ratings))
      .catch(err => res.json(err))
  }

  update (req: Request, res: Response, next: NextFunction): void {
    Rating.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(response => res.json(response))
      .catch(err => res.json(err))
  }
}
