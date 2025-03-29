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
    // Возвращаем только безопасное имя (генерируется multer)
    return res.status(constants.HTTP_STATUS_CREATED).send({
      fileName: `/uploads/${req.file.filename}`,
      originalName: req.file.originalname
    })
  } catch (error) {
    return next(error)
  }
}

export default {}
