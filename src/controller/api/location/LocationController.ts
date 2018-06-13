import { Request, Response, NextFunction } from 'express'
import Controller from '../../Controller'

/**
 * Location controller class.
 * 
 * @author Daniel Peters
 * @version 1.0
 */
export default class LocationController implements Controller {
  create(req: Request, res: Response, next: NextFunction): void {
    throw new Error('Method not implemented.')
  }

  getById(req: Request, res: Response, next: NextFunction): void {
    throw new Error('Method not implemented.')
  }

  getAll(req: Request, res: Response, next: NextFunction): void {
    throw new Error('Method not implemented.')
  }

  update(req: Request, res: Response, next: NextFunction): void {
    throw new Error('Method not implemented.')
  }
}
