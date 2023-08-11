import { Queue } from "bull";
export declare class TaskService {
    private taskQueue;
    constructor(taskQueue: Queue);
    createTask(data: any): Promise<void>;
}
