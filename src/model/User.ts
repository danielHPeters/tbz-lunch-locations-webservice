import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import { Rating } from './Rating'

export const User = Database.orm.define('user',{
  name: Sequelize.STRING,
  lastName: Sequelize.STRING,
  firstName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
})

User.hasMany(Rating)
