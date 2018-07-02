import * as Sequel from 'sequelize'

/**
 * Database configuration and sequelize instance. Initialized on application startup.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Database {
  static readonly orm: Sequel.Sequelize = new Sequel({
    database: 'tbz_lunch_locations_webservice',
    username: 'root',
    password: '',
    dialect: 'mysql',
    define: {
      freezeTableName: true
    }
  })
}
