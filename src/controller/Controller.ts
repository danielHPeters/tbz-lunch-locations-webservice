import { Request, Response, NextFunction } from 'express'

/**
 * Api controller interface.
 * 
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Controller {
  create (req: Request, res: Response, next: NextFunction): void

  getById (req: Request, res: Response, next: NextFunction): void

  getAll (req: Request, res: Response, next: NextFunction): void

  update (req: Request, res: Response, next: NextFunction): void
}
