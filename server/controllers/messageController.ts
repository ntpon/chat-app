import { NextFunction, Request, Response } from 'express'
import { Message } from '../models/Messages'
import ApiError from '../types/ApiError'

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const messages = await Message.findAll({ where: { chatId: id } })
    res.status(200).json(messages)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { chatId, content, fileUrl, imageUrl, userType, idUser } = req.body
    const message = await Message.create({
      chatId,
      content,
      fileUrl,
      imageUrl,
      userType,
      idUser,
    })
    res.status(201).json(message)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const updateIsRead = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const message = await Message.findOne({ where: { id: id } })
    if (!message) {
      return next(ApiError.badRequest('Message not found'))
    }
    await message.update({ isRead: true })
    res.status(200).json(message)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const updateIsDeleted = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const message = await Message.findOne({ where: { id: id } })
    if (!message) {
      return next(ApiError.badRequest('Message not found'))
    }
    await message.update({ isDeleted: true })
    res.status(200).json(message)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}
