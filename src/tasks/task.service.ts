import { Injectable, Query } from "@nestjs/common";


@Injectable()
export class TaskService {
    private tasks = [];

    getAllTasks(){
        return this.tasks
    }

    getTasks(id:number) {
        return this.tasks.find(task => task.id === id)    
       
    }

    createTasks(task: any) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1 
        }); // Corregido para evitar referencia circular
        return task;
    }

    updateTask() {
        return 'Actualizando tarea';
    }

    updateTaskStatus() {
        return 'Actualizando tarea STATUS';
    }

    deleteTask() {
        return 'Eliminando tarea';
    }
}
