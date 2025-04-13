import { Request, Response } from 'express'
import { TaskService } from '../services/taskServices'
import { TaskStatus } from '../types'

const taskService = new TaskService()

export class TaskController {
  //to create the task
  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const newTask = await taskService.createTask(req.body)
      res.status(201).json(newTask)
    } catch (error) {
      res.status(500).json({ message: 'Error creating task', error })
    }
  }

  //to get all the tasks with pagination and sorting
  async getTasks(req: Request, res: Response) {
    try {
      const tasks = await taskService.getTasks(req.query)
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks', error })
    }
  }
  //tp get the task by id
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

  //to update the task by if

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

  //to delete the task by id
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
  //to update the task status by id
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
