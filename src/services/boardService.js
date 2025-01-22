/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
const createNew = async (reqBody) => {
  try {
    // Adjust data for TaskFlow - Add slug for url and SEO
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Adjust Data at Model
    const createdBoard = await boardModel.createNew(newBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)

    // Always return value for Service
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}