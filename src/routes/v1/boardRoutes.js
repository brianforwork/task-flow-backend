import { express } from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Get the Board' })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ message: 'Create the Board' })
  })

export const boardRoutes = Router