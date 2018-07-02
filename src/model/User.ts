import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import Rating from './Rating'

/**
 * User instance attributes.
 */
export interface UserAttributes {
  id?: string,
  name: string
  lastName: string,
  firstName: string,
  email: string,
  password: string
}

/**
 * User Model instance interface.
 */
export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {}

/**
 * User Model definition.
 */
const User = Database.orm.define<UserInstance, UserAttributes>('user', {
  id: { type: Sequelize.STRING, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        msg: 'Name must be between 2 and 250 characters in length',
        args: [2, 250]
      }
    }
  },
  lastName: Sequelize.STRING,
  firstName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [6, 250],
        msg: 'Email address must be between 6 and 250 characters in length'
      },
      isEmail: {
        msg: 'Email address must be valid'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 250],
        msg: 'Password must contain at least 6 characters.'
      }
    }
  }
})

/**
 * Set relations (Rating object gets userId.).
 */
User.hasMany(Rating)

export default User
