import { DataTypes, Sequelize, UUIDV4 } from 'sequelize'
import Rating from '../model/Rating'
import Location from '../model/Location'
import User from '../model/User'

/**
 * Database configuration and sequelize instance. Initialized on application startup.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Database {
  static readonly instance = new Sequelize({
    database: 'tbz_lunch_locations_webservice',
    username: 'root',
    password: '',
    dialect: 'mariadb'
  })

  static init (): void {
    Rating.init({
      id: {
        type: new DataTypes.STRING(36),
        autoIncrement: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        validate: {
          len: {
            args: [36, 36],
            msg: 'Primary key length must be exactly 36 characters long.'
          }
        }
      },
      text: {
        type: new DataTypes.TEXT(),
        allowNull: false
      },
      stars: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        validate: {
          len: {
            args: [1, 5],
            msg: 'Only a rating from 1 to 5 is allowed.'
          }
        }
      },
      userId: {
        type: new DataTypes.STRING(36),
        allowNull: false,
        validate: {
          len: {
            args: [36, 36],
            msg: 'Foreign key length must be exactly 36 characters long.'
          }
        }
      },
      locationId: {
        type: new DataTypes.STRING(36),
        allowNull: false,
        validate: {
          len: {
            args: [36, 36],
            msg: 'Foreign key length must be exactly 36 characters long.'
          }
        }
      }
    }, {
      sequelize: Database.instance,
      tableName: Rating.TABLE_NAME
    })

    Location.init({
      id: {
        type: new DataTypes.STRING(36),
        autoIncrement: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        validate: {
          len: {
            args: [36, 36],
            msg: 'Primary key length must be exactly 36 characters long.'
          }
        }
      },
      name: {
        type: new DataTypes.STRING(255),
        allowNull: false
      },
      lat: {
        type: new DataTypes.DOUBLE(),
        allowNull: false
      },
      lng: {
        type: new DataTypes.DOUBLE(),
        allowNull: false
      }
    }, {
      sequelize: Database.instance,
      tableName: Location.TABLE_NAME
    })

    User.init({
      id: {
        type: new DataTypes.STRING(36),
        autoIncrement: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        validate: {
          len: {
            args: [36, 36],
            msg: 'Primary key length must be exactly 36 characters long.'
          }
        }
      },
      name: {
        type: new DataTypes.STRING(255),
        allowNull: false
      },
      firstName: {
        type: new DataTypes.STRING(255),
        allowNull: false
      },
      lastName: {
        type: new DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: new DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: {
            args: [6, 250],
            msg: 'Email address must be between 6 and 250 characters in length'
          },
          isEmail: {
            msg: 'Email address must be valid'
          }
        }
      },
      password: {
        type: new DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: {
            args: [6, 250],
            msg: 'Password must contain at least 6 characters.'
          }
        }
      }
    }, {
      sequelize: Database.instance,
      tableName: User.TABLE_NAME
    })

    User.hasMany(Rating, {
      sourceKey: 'id',
      foreignKey: 'userId',
      as: 'ratings'
    })

    Location.hasMany(Rating, {
      sourceKey: 'id',
      foreignKey: 'locationId',
      as: 'ratings'
    })

    Rating.belongsTo(User, { targetKey: 'id', as: 'user' })
    Rating.belongsTo(Location, { targetKey: 'id', as: 'location' })
  }
}
