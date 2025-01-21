/* eslint-disable no-console */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNewBoard = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(1).max(50).trim().strict(),
    description: Joi.string().required().min(1).max(200).trim().strict()
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
    next(customError)
  }
}

export const boardValidation = {
  createNewBoard
}