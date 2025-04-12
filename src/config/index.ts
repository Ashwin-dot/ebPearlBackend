import { config } from "dotenv";

config();

const { PORT, MONGODB_URI } = process.env

export const CONFIG = {
    PORT,
    MONGODB_URI,}