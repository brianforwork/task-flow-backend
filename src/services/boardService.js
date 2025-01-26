/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
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

const getDetails = async (boardId) => {
  try {

    // Adjust Data at Model
    const board = await boardModel.getDetails(boardId)

    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }

    const resBoard = cloneDeep(board)
    for (const column of resBoard.columns) {
      // Assign the filtered cards to the column
      column.cards = resBoard.cards.filter(
        card => card.columnId.toString() === column._id.toString()
      )
    }
    delete resBoard.cards

    // Always return value for Service
    return resBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
  getDetails
}