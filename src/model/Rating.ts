import { Model } from 'sequelize'

/**
 * Rating Model definition.
 *
 * @author Daniel Peters
 * @version 1.1
 */
export default class Rating extends Model {
  static readonly TABLE_NAME = 'ratings'
  id!: string
  text!: string
  stars!: number
  userId!: string
  locationId!: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
}
