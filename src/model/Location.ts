import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import Rating from './Rating'

const Location = Database.orm.define('location', {
  name: Sequelize.STRING,
  lat: Sequelize.DOUBLE,
  lng: Sequelize.DOUBLE
})

// Location.hasMany(Rating, { as: 'rating', foreignKey: 'location_id' })

export default Location
