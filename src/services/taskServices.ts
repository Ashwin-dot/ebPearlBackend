import Task from '../models/taskModel'
import { ITask, TaskStatus } from '../types'

interface QueryParams {
  page?: string
  limit?: string
  sortBy?: string
  order?: 'asc' | 'desc'
  status?: TaskStatus
}

export class TaskService {
  async createTask(data: Partial<ITask>): Promise<ITask> {
    const task = new Task({
      title: data.title,
      description: data.description,
      status: data.status || TaskStatus.PENDING,
    })
    return await task.save()
  }

  async getTasks(query: QueryParams) {
    const {
      page = '1',
      limit = '10',
      sortBy = 'createdAt',
      order = 'desc',
      status,
    } = query

    const pageNumber = parseInt(page, 10)
    const limitNumber = parseInt(limit, 10)
    const sortOrder = order === 'asc' ? 1 : -1

    const filter: Partial<{ status: TaskStatus }> = {}
    if (status) filter.status = status

    const tasks = await Task.find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)

    const total = await Task.countDocuments(filter)

    return {
      total,
      page: pageNumber,
      limit: limitNumber,
      tasks,
    }
  }

  async getTaskById(id: string) {
    return await Task.findById(id)
  }

  async updateTask(id: string, data: Partial<ITask>) {
    return await Task.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })
  }

  async deleteTask(id: string) {
    return await Task.findByIdAndDelete(id)
  }

  async updateTaskStatus(id: string, status: TaskStatus) {
    return await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true },
    )
  }
}
export default TaskService
