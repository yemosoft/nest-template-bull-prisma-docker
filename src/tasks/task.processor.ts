import { Processor, Process } from "@nestjs/bull";
import { Job } from "bull";

@Processor("tasks")
export class TaskProcessor {
  @Process("transcode")
  async transcode(job: Job<number>) {
    console.log(`Processing job ${job.id} with data: ${job.data}`);
  }
}
