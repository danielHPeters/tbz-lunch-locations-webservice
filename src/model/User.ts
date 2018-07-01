import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import Rating from './Rating'

export interface UserAttributes {
  id?: string,
  name: string
  lastName: string,
  firstName: string,
  email: string,
  password: string
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {}

const User = Database.orm.define<UserInstance, UserAttributes>('user', {
  id: { type: Sequelize.STRING, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  name: Sequelize.STRING,
  lastName: Sequelize.STRING,
  firstName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
})

User.hasMany(Rating)

export default User
