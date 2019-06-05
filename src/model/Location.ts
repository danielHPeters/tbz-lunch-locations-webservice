import { Association, Model } from 'sequelize'
import Rating from './Rating'

/**
 * Location Model definition.
 *
 * @author Daniel Peters
 * @version 1.1
 */
export default class Location extends Model {
  static readonly TABLE_NAME = 'locations'
  id!: string
  name!: string
  lat!: number
  lng!: number
  readonly createdAt!: Date
  readonly updatedAt!: Date
  readonly ratings?: Rating[]

  static associations: {
    ratings: Association<Location, Rating>
  }
}
