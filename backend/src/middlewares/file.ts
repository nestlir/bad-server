import { Request, Express } from 'express'
import multer, { FileFilterCallback } from 'multer'
import { join, extname } from 'path'
import crypto from 'crypto'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
  destination: (
    _req: Request,
    _file: Express.Multer.File,
    cb: DestinationCallback
  ) => {
    cb(
      null,
      join(
        __dirname,
        process.env.UPLOAD_PATH_TEMP
          ? `../public/${process.env.UPLOAD_PATH_TEMP}`
          : '../public'
      )
    )
  },

  filename: (
    _req: Request,
    file: Express.Multer.File,
    cb: FileNameCallback
  ) => {
    const ext = extname(file.originalname).toLowerCase()
    const safeName = crypto.randomBytes(16).toString('hex') + ext
    cb(null, safeName)
  }
})

const allowedTypes = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/svg+xml',
  'image/webp', // ← добавили!
  'application/octet-stream' // ← на всякий случай
]

const fileFilter = (
    _req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    console.log('📎 mimetype:', file.mimetype)
    const isAllowed = allowedTypes.includes(file.mimetype)
    cb(null, isAllowed)
}
  

export default multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1 * 1024 * 1024, // 1MB
  },
})
