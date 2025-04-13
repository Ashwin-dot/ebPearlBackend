import express from 'express'
import { TaskController } from '../controllers/taskController'
import validateSchema from '../middleware/validate'
import { taskSchema, taskUpdateSchema } from '../JoiSchema/taskSchema'

const router = express.Router()
const taskController = new TaskController()

router.get('/', taskController.getTasks.bind(taskController))
router.post(
  '/',
  validateSchema(taskSchema),
  taskController.createTask.bind(taskController),
)
router.get('/:id', taskController.getTaskById.bind(taskController))
router.put(
  '/:id',
  validateSchema(taskUpdateSchema),
  taskController.updateTask.bind(taskController),
)
router.delete('/:id', taskController.deleteTask.bind(taskController))
router.patch('/:id', taskController.updateTaskStatus.bind(taskController))

export default router
