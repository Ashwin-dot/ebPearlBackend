import mongoose from 'mongoose'
import { ITask, TaskStatus } from '../types'

const taskSchema = new mongoose.Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.PENDING,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Task = mongoose.model('Task', taskSchema)

export default Task
