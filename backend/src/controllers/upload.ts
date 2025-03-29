import { Request, Response, NextFunction } from 'express'
import { constants } from 'http2'
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
    // ✅ Возвращаем безопасный путь
    const fileName = `/uploads/${req.file.filename}`

    return res.status(constants.HTTP_STATUS_CREATED).json({
      fileName
      // можно также вернуть originalName отдельно, если нужно
    })
  } catch (error) {
    return next(error)
  }
}
