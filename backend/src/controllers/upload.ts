import { NextFunction, Request, Response } from 'express'
import { constants } from 'http2'
import { escape } from 'validator'
import { basename } from 'path'
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
        // Защита от Path Traversal
        const safeFileName = basename(req.file.filename).slice(0, 255)

        const fileName = process.env.UPLOAD_PATH
            ? `/${process.env.UPLOAD_PATH}/${safeFileName}`
            : `/${safeFileName}`

        // Экранируем оригинальное имя, ограничим длину
        const originalName = escape(req.file.originalname).slice(0, 100)

        return res.status(constants.HTTP_STATUS_CREATED).send({
            fileName,
            originalName,
        })
    } catch (error) {
        return next(error)
    }
}

export default {}
