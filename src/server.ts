import app from './app'
import { CONFIG } from './config'

const startServer = () => {
  const PORT = CONFIG.PORT || 5000
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log('Error starting server:', error)
  }
}
startServer()
