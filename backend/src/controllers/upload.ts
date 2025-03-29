import { NextFunction, Request, Response } from 'express'
import { constants } from 'http2'
import { extname } from 'path'
import crypto from 'crypto'
import BadRequestError from '../errors/bad-request-error'

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    return next(new BadRequestError('Файл не загружен'))
  }

  try {
    // Сгенерируем безопасное имя: random + расширение
    const ext = extname(req.file.originalname)
    const safeFileName = `${crypto.randomBytes(16).toString('hex')}${ext}`

    const fileName = process.env.UPLOAD_PATH
      ? `/${process.env.UPLOAD_PATH}/${safeFileName}`
      : `/${safeFileName}`

    return res.status(constants.HTTP_STATUS_CREATED).send({
      fileName, // ✅ Только безопасное имя
    })
  } catch (error) {
    return next(error)
  }
}

export default {}
