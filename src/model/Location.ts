import * as Sequelize from 'sequelize'
import Database from '../config/Database'
import Rating from './Rating'

export interface LocationAttributes {
  id?: string,
  name: string,
  lat: number,
  lng: number
}

export interface LocationInstance extends Sequelize.Instance<LocationAttributes>, LocationAttributes {}

const Location = Database.orm.define<LocationInstance, LocationAttributes>('location', {
  id: { type: Sequelize.STRING, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  name: Sequelize.STRING,
  lat: Sequelize.DOUBLE,
  lng: Sequelize.DOUBLE
})

Location.hasMany(Rating)

export default Location
