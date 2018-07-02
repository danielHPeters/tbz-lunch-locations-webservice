import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import Rating from './Rating'

/**
 * Location instance attributes.
 */
export interface LocationAttributes {
  id?: string,
  name: string,
  lat: number,
  lng: number
}

/**
 * Location Model instance interface.
 */
export interface LocationInstance extends Sequelize.Instance<LocationAttributes>, LocationAttributes {}

/**
 * Location Model definition.
 */
const Location = Database.orm.define<LocationInstance, LocationAttributes>('location', {
  id: { type: Sequelize.STRING, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  name: Sequelize.STRING,
  lat: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  lng: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})

/**
 * Set relations (Rating object gets locationId.).
 */
Location.hasMany(Rating)

export default Location
