import mongoose, { Document, Schema } from 'mongoose';

export enum TaskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed',
}
export interface ITask extends Document {
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: Date;
}

