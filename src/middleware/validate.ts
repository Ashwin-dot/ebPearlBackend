import Joi from 'joi'
import { NextFunction, Request, Response } from 'express'

const validateSchema = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body)
    if (error) {
      res.status(400).json({ error: error.details[0].message })
      return
    }
    next()
  }
}

export default validateSchema
