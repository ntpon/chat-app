import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import { connectDB } from './config/db'

import chatsRouter from './routes/chats'
import messagesRouter from './routes/messages'

import { errorHandler, errorRoute } from './middleware/errorHandler'
import { PORT } from './config/constants'

dotenv.config()
const app = express()

app.use(helmet())

app.use(express.json({ limit: '5mb' }))
app.use(cors())

app.use('/api/v1/chats', chatsRouter)
app.use('/api/v1/messages', messagesRouter)

app.use(errorRoute)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

connectDB()
