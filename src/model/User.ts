import { Association, Model } from 'sequelize'
import Rating from './Rating'

/**
 * User instance attributes.
 */
export default class User extends Model {
  static readonly TABLE_NAME = 'users'
  id!: string
  name!: string
  lastName!: string
  firstName!: string
  email!: string
  password!: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
  readonly ratings?: Rating[]

  static associations: {
    ratings: Association<User, Rating>
  }
}
