"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const task_processor_1 = require("./task.processor");
const task_service_1 = require("./task.service");
let TasksModule = exports.TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({
                name: "tasks",
            }),
        ],
        providers: [task_processor_1.TaskProcessor, task_service_1.TaskService],
        exports: [task_processor_1.TaskProcessor, task_service_1.TaskService],
    })
], TasksModule);
//# sourceMappingURL=tasks.module.js.map