import data from '../data/init'
import { JskUser } from '../models/JskUser'
import { HrUser } from '../models/HrUser'
import { Position } from '../models/Position'
import { Chat } from '../models/Chat'
import { Message } from '../models/Messages'

export const seed = async () => {
  try {
    for (const jskUser of data.jskUser) {
      await JskUser.create(jskUser)
    }
    for (const hrUser of data.hrUser) {
      await HrUser.create(hrUser)
    }
    for (const position of data.position) {
      await Position.create(position)
    }
    for (const chat of data.chat) {
      await Chat.create(chat)
    }
    for (const message of data.message) {
      await Message.create(message)
    }
    console.log('Data seeded')
  } catch (e) {
    console.log(e)
  }
}
