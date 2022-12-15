import express from 'express'
import {
  getMessages,
  createMessage,
  updateIsRead,
  updateIsDeleted,
} from '../controllers/messageController'

const router = express.Router()

router.get('/:id', getMessages)
router.post('/', createMessage)
router.put('/:id/read', updateIsRead)
router.put('/:id/delete', updateIsDeleted)

export default router
