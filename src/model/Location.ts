import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import { Rating } from './Rating'

export const Location = Database.orm.define('location', {
  name: Sequelize.STRING,
  x: Sequelize.STRING,
  y: Sequelize.STRING
})

Location.hasMany(Rating)
