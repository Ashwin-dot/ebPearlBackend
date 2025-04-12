import express from "express";
import {getTasks, createTasks,getTaskById, updateTask, deleteTask, updateTaskStatus} from "../controllers/taskController"
import validateSchema from "../middleware/validate";
import {taskSchema, taskUpdateSchema} from "../JoiSchema/taskSchema";

const router = express.Router();

router.get("/",getTasks as any)
router.post("/",validateSchema(taskSchema) ,createTasks as any )
router.get("/:id", getTaskById as any)
router.put("/:id",validateSchema(taskUpdateSchema), updateTask as any)
router.delete("/:id", deleteTask as any)
router.patch("/:id", updateTaskStatus as any)




export default router;