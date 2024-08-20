import { Controller, Get } from "@nestjs/common"

@Controller({})
export class TaskController {

    @Get('/tasks') 
    // Buscar en base de datos
    // Petición a la API    
    getAllTasks(){
        return 'Obteniendo todas las tareas'
    }

}