/* eslint-disable no-console */
import express from 'express'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb'
import exitHook from 'async-exit-hook'
import 'dotenv/config'
import { env } from '~/config/environment'
const app = express()


const START_SERVER = () => {
  app.get('/', async (req, res) => {
    // console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello, I am ${env.AUTHOR} and running at ${ env.APP_HOST }:${ env.APP_PORT }/`)
  })

  // Clean up after close App
  exitHook(() => {
    CLOSE_DB()
  })
}

// IIFE
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


