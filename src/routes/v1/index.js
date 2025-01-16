import { express } from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoutes'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'V1 APIs are all ready!' })
})

// Route for Board
Router.use('/board', boardRoutes)

export const APIs_V1 = Router