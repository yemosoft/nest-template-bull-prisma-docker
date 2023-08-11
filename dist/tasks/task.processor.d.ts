import { Job } from "bull";
export declare class TaskProcessor {
    transcode(job: Job<number>): Promise<void>;
}
