import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller({})
export class TaskController {

    taskService:TaskService

    constructor(taskService:TaskService){
        this.taskService = taskService;

    }

    @Get('/tasks') // Poniendo nombre de URL
    getAllTasks(){
        return this.taskService.getTasks();

    }
    
    @Post('/tasks')
    createTasks(){
        return 'Creando una tarea'
    }

    @Put('/tasks')
    updateTasks(){
        return 'Actualizando tarea'
    }

    @Patch('/tasks')
    updateTaskStatus(){
        return 'Actualizando tarea completamente'
    }

    @Delete('/tasks')
    deleteTasks(){
        return 'Eliminando tarea'
    }

}