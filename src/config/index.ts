import { config } from 'dotenv'

config()

const { PORT, MONGODB_URI, NODE_ENV } = process.env

export const CONFIG = {
  PORT,
  MONGODB_URI,
  NODE_ENV,
}
