import app from './app'
import { CONFIG } from './config'
import logger from './config/logger'

const startServer = () => {
  const PORT = CONFIG.PORT || 5000
  try {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    logger.info('Error starting server:', error)
  }
}
startServer()
