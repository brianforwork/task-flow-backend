/* eslint-disable no-console */
import express from 'express'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb'
import exitHook from 'async-exit-hook'
import 'dotenv/config'
import { env } from '~/config/environment'
import { APIs_V1 } from './routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'

const app = express()


const START_SERVER = () => {
  app.use(express.json())
  app.use('/v1', APIs_V1)

  // Middleware Error Handling
  app.use(errorHandlingMiddleware)


  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello, I am ${env.AUTHOR} and running at ${ env.APP_HOST }:${ env.APP_PORT }/`)
  })

  // Clean up after close App
  exitHook(() => {
    CLOSE_DB()
  })
}

// IIFE
// Try-catch to check the connection of DB
(async () => {
  try {
    console.log('Connecting to DB')
    await CONNECT_DB()
    console.log('Connected to DB')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

// CONNECT_DB()
//   .then(() => console.log('Connect db'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })


