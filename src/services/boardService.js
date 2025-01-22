/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
const createNew = async (reqBody) => {
  try {
    // Adjust data for TaskFlow - Add slug for url and SEO
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Always return value for Service
    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}