/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

import ApiError from '../types/ApiError'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError)
    return res.status(err.code).json({ code: err.code, error: err.message })

  return res.status(500).json({ code: 500, error: 'Something went wrong' })
}

export const errorRoute = () => {
  throw ApiError.notFound('Could not find this route.')
}
