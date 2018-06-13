import * as Sequel from 'sequelize'
import { Sequelize, LoggingOptions } from 'sequelize'

export default class Database {
  static readonly uri: string = 'mysql://mysql:root@localhost:3306/tbz_lunch_locations_webservice'
  static readonly options: LoggingOptions = { benchmark: true, logging: console.log }
  static readonly orm: Sequelize = new Sequel(Database.uri, Database.options)
}
