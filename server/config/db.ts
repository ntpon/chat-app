import { Sequelize } from 'sequelize-typescript'
import { Chat } from '../models/Chat'
import { HrUser } from '../models/HrUser'
import { JskUser } from '../models/JskUser'
import { Message } from '../models/Messages'
import { Position } from '../models/Position'
import { seed } from '../utils/seed'
import { POSTGRES } from './constants'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: POSTGRES.HOST,
  port: POSTGRES.PORT,
  username: POSTGRES.USERNAME,
  password: POSTGRES.PASSWORD,
  database: POSTGRES.DATABASE,
  //   dialectOptions: {
  //     ssl: {
  //       require: true, // This will help you. But you will see nwe error
  //       rejectUnauthorized: false, // This line will fix new error
  //     },
  //   },
  models: [HrUser, JskUser, Position, Chat, Message],
})

export const connectDB = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Connection has been established successfully.')
    // seed()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
