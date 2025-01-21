/* eslint-disable no-console */
// Controller is used to navigate in the web
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    // console.log(req.body)
    // res.status(StatusCodes.CREATED).json({ message: 'POST Controller: Create the Board' })
    throw new ApiError(StatusCodes.BAD_GATEWAY, 'Testing')
  } catch (error) {next(error)}
}

export const boardController = {
  createNew
}