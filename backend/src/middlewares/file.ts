import { Request, Express } from 'express'
import multer, { FileFilterCallback } from 'multer'
import { join, extname } from 'path'
import crypto from 'crypto'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb: DestinationCallback) => {
    cb(null, join(__dirname, '../public/uploads')) // 🔐 безопасный фиксированный путь
  },
  filename: (_req: Request, file: Express.Multer.File, cb: FileNameCallback) => {
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
  'image/webp'
]

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(null, false)
  }
  return cb(null, true)
}

export default multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
})
