import express from "express";
import {getTasks, createTasks,getTaskById, updateTask, deleteTask} from "../controllers/taskController"
import validateSchema from "../middleware/validate";
import {taskSchema, taskUpdateSchema} from "../JoiSchema/taskSchema";

const router = express.Router();

router.get("/",getTasks as any)
router.post("/",validateSchema(taskSchema) ,createTasks )
router.get("/:id", getTaskById as any)
router.put("/:id",validateSchema(taskUpdateSchema), updateTask )
router.delete("/:id", deleteTask as any)


export default router;