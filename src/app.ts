import express from "express"
import taskRoutes from "./routes/taskRoutes";
import mongoose from "mongoose";
import { CONFIG } from "./config";

const app = express();

app.use(express.json());
app.use("/api/tasks",taskRoutes);

const MongoDB = CONFIG.MONGODB_URI || "mongodb://127.0.0.1:27017/tasksdb"
try {
    mongoose.connect(MongoDB)
    console.log("Database Conected")
} catch (error) {
    console.log("Error connecting to MongoDB:", error);
    
}


export default app;