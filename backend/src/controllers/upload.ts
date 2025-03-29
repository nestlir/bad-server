import { NextFunction, Request, Response } from 'express'
import { constants } from 'http2'
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
    // 🛡 Используем имя, сгенерированное multer (уже безопасное)
    const fileName = process.env.UPLOAD_PATH_TEMP
      ? `/${process.env.UPLOAD_PATH_TEMP}/${req.file.filename}`
      : `/${req.file.filename}`

    return res.status(constants.HTTP_STATUS_CREATED).send({ fileName })
  } catch (error) {
    return next(error)
  }
}

export default {}
