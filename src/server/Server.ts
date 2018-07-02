import { Http2Server } from 'http2'
import * as http from 'http'
import * as path from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as favicon from 'serve-favicon'
import * as logger from 'morgan'
import * as createError from 'http-errors'
import * as debug from 'debug'
import Routes from '../config/Routes'

/**
 * Server class. The server uses a http2 server serving an Express application on top of it.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export class Server {
  app: express.Application
  httpServer: Http2Server
  routes: Routes
  private port

  constructor () {
    debug('http')
    this.init()
  }

  public static bootstrap (): Server {
    return new Server()
  }

  static normalizePort (val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
      // named pipe
      return val
    }

    if (port >= 0) {
      // port number
      return port
    }

    return false
  }

  /**
   * Initialize server and middleware.
   */
  init (): void {
    this.app = express()
    this.httpServer = http.createServer(this.app)
    this.httpServer.on('error', this.onError.bind(this))
    this.httpServer.on('listening', this.onListening.bind(this))
    this.app.set('views', path.join(__dirname, '../../views'))
    this.app.set('view engine', 'pug')
    this.app.use(logger('dev'))
    this.app.use(bodyParser.json())
    this.app.use(cookieParser())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(favicon(path.join(__dirname, '../../public/favicon/favicon.ico')))
    this.app.use(express.static(path.join(__dirname, '../../public')))
    this.routes = new Routes(this.app)

    // catch 404 and forward to error handler
    this.app.use((req, res, next) => next(createError(404)))

    // error handler
    this.app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.render('error')
    })
    this.port = Server.normalizePort(process.env.PORT || '3000')
    this.app.set('port', this.port)
    this.httpServer.listen(this.port)
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  onError (error) {
    if (error.syscall !== 'listen') {
      throw error
    }

    const bind = typeof this.port === 'string'
      ? 'Pipe ' + this.port
      : 'Port ' + this.port

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
        break
      default:
        throw error
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  onListening () {
    const address = this.httpServer.address()
    const bind = typeof address === 'string'
      ? 'pipe ' + address
      : 'port ' + address.port
    debug('Listening on ' + bind)
  }
}
