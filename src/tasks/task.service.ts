import { Injectable } from "@nestjs/common";

// Reutilizar código
@Injectable()
export class TaskService{

    getTasks(){
        return [1,2,3,"Arreglo"]
    }

    createTasks(){

    }

    updateTask(){

    }

    updateTaskStatus(){
        
    }

    deleteTask(){
        
    }
}