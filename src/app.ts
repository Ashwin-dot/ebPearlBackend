import express from 'express'
import taskRoutes from './routes/taskRoutes'
import mongoose from 'mongoose'
import { CONFIG } from './config'

const app = express()

app.use(express.json())
app.use('/api/tasks', taskRoutes)

const MongoDB = CONFIG.MONGODB_URI || 'mongodb://127.0.0.1:27017/tasksdb'

const startServer = async () => {
  try {
    await mongoose.connect(MongoDB)
    console.log(' Database Connected')

    const PORT = CONFIG.PORT || 3000
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

startServer()

export default app
