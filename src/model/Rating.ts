import * as Sequelize from 'sequelize'
import Database from '../config/Database'

/**
 * Rating instance attributes.
 */
export interface RatingAttributes {
  id: string,
  text: string,
  stars: number
  userId: string,
  locationId: string
}

/**
 * Rating Model instance interface.
 */
export interface RatingInstance extends Sequelize.Instance<RatingAttributes>, RatingAttributes {}

/**
 * Rating Model definition.
 */
const Rating = Database.orm.define<RatingInstance, RatingAttributes>('rating', {
  id: { type: Sequelize.STRING, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stars: {
    type: Sequelize.TINYINT,
    defaultValue: 1,
    allowNull: false
  }
})

export default Rating
