import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { TaskService } from "./task.service";
import { query } from "express";

@Controller('/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    getAllTasks(@Query() query:any) {
        console.log(query)
        return this.taskService.getAllTasks();
    }

    @Get('/2')
    getTask() {
        return this.taskService.getTasks(2);
    }

    @Post()
    createTask(@Body() task: any) {
        return this.taskService.createTasks(task);
    }
}
