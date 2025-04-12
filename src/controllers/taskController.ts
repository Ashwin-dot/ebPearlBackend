import { Request, Response } from "express";
import { ITask, TaskStatus } from "../types";
import Task from "../models/taskModel";

//create task
export const createTasks = async (req: Request, res:Response)=>{
    try {
        const { title, description, status } = req.body;
    
        const newTask: ITask = new Task({
          title,
          description,
          status: status || TaskStatus.PENDING,
        });
    
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
      } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
      }
}

//to get all the task

interface QueryParams {
  page?: string;
  limit?: string;
  sortBy?: string;
  order?: "asc" | "desc";
  status?: TaskStatus;
}

export const getTasks = async (req: Request<{}, {}, {}, QueryParams>, res: Response) => {
  try {
    const {
      page = "1",
      limit = "10",
      sortBy = "createdAt",
      order = "desc",
      status,
    } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const sortOrder = order === "asc" ? 1 : -1;

    const filter: Partial<{ status: TaskStatus }> = {};
    if (status) filter.status = status;

    const tasks = await Task.find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const total = await Task.countDocuments(filter);

    return res.status(200).json({
      total,
      page: pageNumber,
      limit: limitNumber,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching tasks",
      error,
    });
  }
};

//to get the task only by single id
export const getTaskById = async (req: Request, res:Response)=>{
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
    
        if (!task) {
          return res.status(404).json({ message: 'Task not found' });
        }
    
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
      }
}

//update the task by id
export const updateTask = async (req: Request, res: Response) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTask)  res.status(404).json({ message: 'Task not found' });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
};


//delete the task by id
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
};
