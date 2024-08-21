import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";

@Module({
    controllers : [TaskController], // Un modulo continen muchos controladores
    providers: [TaskService]
})

export class TaskModule{
    
}