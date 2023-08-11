import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { TaskProcessor } from "./task.processor";
import { TaskService } from "./task.service";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "tasks",
    }),
  ],
  providers: [TaskProcessor, TaskService],
  exports: [TaskProcessor, TaskService],
})
export class TasksModule {}
