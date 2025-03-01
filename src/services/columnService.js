/* eslint-disable no-useless-catch */
import { columnModel } from '~/models/columnModel'
import { boardModel } from '~/models/boardModel'
const createNew = async (reqBody) => {
  try {
    // Adjust data for TaskFlow - Add slug for url and SEO
    const newColumn = {
      ...reqBody
    }

    // Adjust Data at Model
    const createdColumn = await columnModel.createNew(newColumn)

    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)

    if (getNewColumn) {
      getNewColumn.card = []

      await boardModel.pushColumnOrderIds(getNewColumn)
    }

    // Always return value for Service
    return getNewColumn
  } catch (error) {
    throw error
  }
}


export const columnService = {
  createNew
}