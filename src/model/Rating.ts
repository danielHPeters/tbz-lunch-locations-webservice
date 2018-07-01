import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import User from './User'
import Location from './Location'

export interface RatingAttributes {
  id: string,
  text: string,
  stars: number
  userId: string,
  locationId: string
}

export interface RatingInstance extends Sequelize.Instance<RatingAttributes>, RatingAttributes {}

const Rating = Database.orm.define<RatingInstance, RatingAttributes>('rating', {
  id: { type: Sequelize.STRING, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  text: Sequelize.STRING,
  stars: Sequelize.TINYINT
})

export default Rating
