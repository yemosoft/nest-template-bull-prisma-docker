import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Injectable()
export class TaskService {
  constructor(@InjectQueue("tasks") private taskQueue: Queue) {}

  async createTask(data: any) {
    await this.taskQueue.add("transcode", data);
  }
}
