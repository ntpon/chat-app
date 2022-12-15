import { NextFunction, Request, Response } from 'express'
import { Chat } from '../models/Chat'
import ApiError from '../types/ApiError'

export const getChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const chat = await Chat.findOne({ where: { id: id } })
    if (!chat) {
      next(ApiError.badRequest('Chat not found'))
    }
    res.status(200).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const getChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const chats = await Chat.findAll()
    res.status(200).json(chats)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const createChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idJsk, idHr, idEmp, idPosition, isFavorite, isDeleted, isHidden } =
      req.body
    const chat = await Chat.create({
      idJsk,
      idHr,
      idEmp,
      idPosition,
      isFavorite,
      isDeleted,
      isHidden,
    })
    res.status(201).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const updateChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const { idJsk, idHr, idEmp, idPosition, isFavorite, isDeleted, isHidden } =
      req.body
    const chat = await Chat.findOne({ where: { id: id } })
    if (!chat) {
      return next(ApiError.badRequest('Chat not found'))
    }
    await chat.update({
      idJsk,
      idHr,
      idEmp,
      idPosition,
      isFavorite,
      isDeleted,
      isHidden,
    })
    res.status(200).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const deleteChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const chat = await Chat.findOne({ where: { id: id } })
    if (!chat) {
      return next(ApiError.badRequest('Chat not found'))
    }
    chat.isDeleted = true
    await chat.save()
    res.status(200).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const hideChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const chat = await Chat.findOne({ where: { id: id } })
    if (!chat) {
      return next(ApiError.badRequest('Chat not found'))
    }
    chat.isHidden = true
    await chat.save()
    res.status(200).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const unhideChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const chat = await Chat.findOne({ where: { id: id } })
    if (!chat) {
      return next(ApiError.badRequest('Chat not found'))
    }
    chat.isHidden = false
    await chat.save()
    res.status(200).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const favoriteChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const chat = await Chat.findOne({ where: { id: id } })
    if (!chat) {
      return next(ApiError.badRequest('Chat not found'))
    }
    chat.isFavorite = true
    await chat.save()
    res.status(200).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}

export const unfavoriteChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const chat = await Chat.findOne({ where: { id: id } })
    if (!chat) {
      return next(ApiError.badRequest('Chat not found'))
    }
    chat.isFavorite = false
    await chat.save()
    res.status(200).json(chat)
  } catch (e) {
    next(ApiError.badRequest(e.message))
  }
}
