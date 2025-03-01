import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoute'
import { columnRoutes } from './columnRoute'
import { cardRoutes } from './cardRoute'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'V1 APIs are all ready!' })
})

// Route for Board
Router.use('/board', boardRoutes)

// Route for Column
Router.use('/columns', columnRoutes)

// Route for Card
Router.use('/cards', cardRoutes)

export const APIs_V1 = Router