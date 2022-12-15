import express from 'express'
import {
  getChat,
  getChats,
  createChat,
  updateChat,
  deleteChat,
  favoriteChat,
  hideChat,
  unfavoriteChat,
  unhideChat,
} from '../controllers/chatController'

const router = express.Router()

router.get('/', getChats)
router.get('/:id', getChat)
router.post('/', createChat)
router.put('/:id', updateChat)
router.delete('/:id', deleteChat)
router.put('/:id/favorite', favoriteChat)
router.put('/:id/unfavorite', unfavoriteChat)
router.put('/:id/hide', hideChat)
router.put('/:id/unhide', unhideChat)

export default router
