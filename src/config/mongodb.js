import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let taskflowDatabaseInstance = null

// Initize mongoClientInstance to connect to MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  taskflowDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if (!taskflowDatabaseInstance) throw new Error('Must Connect First')
  return taskflowDatabaseInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}