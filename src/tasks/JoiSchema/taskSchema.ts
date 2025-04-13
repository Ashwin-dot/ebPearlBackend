import joi from 'joi'
import { TaskStatus } from '../types'

export const taskSchema = joi.object({
  title: joi.string().required().messages({
    'any.required': 'Title is required',
    'string.empty': 'Title cannot be empty',
  }),
  description: joi.string().required().messages({
    'any.required': 'Description is required',
    'string.empty': 'Description cannot be empty',
  }),
  status: joi
    .string()
    .valid(...Object.values(TaskStatus))
    .optional(),
})

export const taskUpdateSchema = joi.object({
  title: joi.string().optional(),
  description: joi.string().optional(),
  status: joi
    .string()
    .valid(...Object.values(TaskStatus))
    .optional(),
})
