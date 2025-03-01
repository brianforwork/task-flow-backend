/* eslint-disable no-useless-catch */
import { cardModel } from '~/models/cardModel'
import { columnModel } from '~/models/columnModel'
const createNew = async (reqBody) => {
  try {
    // Adjust data for TaskFlow - Add slug for url and SEO
    const newCard = {
      ...reqBody
    }

    // Adjust Data at Model
    const createdCard = await cardModel.createNew(newCard)

    const getNewCard = await cardModel.findOneById(createdCard.insertedId)

    if (getNewCard) {
      await columnModel.pushCardOrderIds(getNewCard)
    }

    // Always return value for Service
    return getNewCard
  } catch (error) {
    throw error
  }
}


export const cardService = {
  createNew
}