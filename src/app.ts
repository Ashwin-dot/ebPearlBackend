import express from 'express'
import taskRoutes from './tasks/routes/taskRoutes'
import mongoose from 'mongoose'
import { CONFIG } from './config'
import logger from './config/logger'

const app = express()

app.use(express.json())
app.use('/api/tasks', taskRoutes)

const MongoDB = CONFIG.MONGODB_URI || 'mongodb://127.0.0.1:27017/tasksdb'

const startServer = async () => {
  try {
    await mongoose.connect(MongoDB)
    logger.info(' Database Connected')

    const PORT = CONFIG.PORT || 3000
    app.listen(PORT, () => {
      logger.info(`Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error)
  }
}

startServer()

export default app
