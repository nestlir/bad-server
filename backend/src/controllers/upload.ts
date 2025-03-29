import { NextFunction, Request, Response } from 'express'
import { constants } from 'http2'
import { extname } from 'path'
import crypto from 'crypto'
import BadRequestError from '../errors/bad-request-error'

// POST /upload
export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    return next(new BadRequestError('Файл не загружен'))
  }

  try {
    // 📦 Генерация безопасного имени файла
    const extension = extname(req.file.originalname)
    const safeFileName = `${crypto.randomBytes(16).toString('hex')}${extension}`

    const fileName = process.env.UPLOAD_PATH
      ? `/${process.env.UPLOAD_PATH}/${safeFileName}`
      : `/${safeFileName}`

    // ✅ Возвращаем только безопасное имя — без originalName
    return res.status(constants.HTTP_STATUS_CREATED).send({ fileName })
  } catch (error) {
    return next(error)
  }
}

export default {}
