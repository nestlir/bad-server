import multer from 'multer'
import { join, extname } from 'path'
import crypto from 'crypto'

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, join(__dirname, '../public/uploads')) // безопасная директория
  },
  filename: (_req, file, cb) => {
    const ext = extname(file.originalname).toLowerCase()
    const safeName = crypto.randomBytes(16).toString('hex') + ext
    cb(null, safeName)
  }
})

export default multer({ storage })
