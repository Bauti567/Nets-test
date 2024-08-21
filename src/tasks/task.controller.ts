import { Controller, Get } from "@nestjs/common"
import { TaskService } from "./task.service"
import { TaskModule } from "./tasks.module"


@Controller('/tasks')
export class TaskController {
    taskService: TaskService
    
    constructor(taskService: TaskService){
        this.taskService = taskService
    }
    
    @Get() 
    // Buscar en base de datos
    // Petición a la API    
    getAllTasks(){
        return this.taskService.getTasks();

    }

}