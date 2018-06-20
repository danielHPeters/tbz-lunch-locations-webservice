import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import User from './User'
import Location from './Location'

const Rating = Database.orm.define('rating', {
  text: Sequelize.STRING,
  stars: Sequelize.TINYINT
})

// Rating.belongsTo(User, { foreignKey: 'user_id' })
// Rating.belongsTo(Location, { foreignKey: 'location_id' })

export default Rating
