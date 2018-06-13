import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import { User } from './User'
import { Location } from './Location'

export const Rating = Database.orm.define('rating', {
  text: Sequelize.STRING,
  stars: Sequelize.TINYINT
})

Rating.belongsTo(User)
Rating.belongsTo(Location)
