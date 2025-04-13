import { Request, Response } from 'express'
import { TaskService } from '../services/taskServices'
import { TaskStatus } from '../types'

const taskService = new TaskService()

export class TaskController {
  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const newTask = await taskService.createTask(req.body)
      res.status(201).json(newTask)
    } catch (error) {
      res.status(500).json({ message: 'Error creating task', error })
    }
  }

  async getTasks(req: Request, res: Response) {
    try {
      const tasks = await taskService.getTasks(req.query)
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks', error })
    }
  }

  async getTaskById(req: Request, res: Response) {
    try {
      const task = await taskService.getTaskById(req.params.id)
      if (!task) {
        res.status(404).json({ message: 'Task not found' })
      }
      res.status(200).json(task)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching task', error })
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const updatedTask = await taskService.updateTask(req.params.id, req.body)
      if (!updatedTask) {
        res.status(404).json({ message: 'Task not found' })
      }
      res.status(200).json(updatedTask)
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error })
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const deletedTask = await taskService.deleteTask(req.params.id)
      if (!deletedTask) {
        res.status(404).json({ message: 'Task not found' })
      }
      res.status(200).json({ message: 'Task deleted successfully' })
    } catch (error) {
      res.status(500).json({ message: 'Error deleting task', error })
    }
  }

  async updateTaskStatus(req: Request, res: Response) {
    try {
      const { status } = req.body
      const updatedTask = await taskService.updateTaskStatus(
        req.params.id,
        status as TaskStatus,
      )
      if (!updatedTask) {
        res.status(404).json({ message: 'Task not found' })
      }
      res.status(200).json(updatedTask)
    } catch (error) {
      res.status(500).json({ message: 'Error updating task status', error })
    }
  }
}
