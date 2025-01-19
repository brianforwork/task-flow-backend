/* eslint-disable no-console */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNewBoard = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(1).max(50).trim().strict(),
    description: Joi.string().required().min(1).max(200).trim().strict()
  })

  try {
    console.log(req.body)

    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // next()

    res.status(StatusCodes.CREATED).json({ message: 'POST Validation: Create the Board' })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }


}

export const boardValidation = {
  createNewBoard
}