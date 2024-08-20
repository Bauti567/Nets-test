import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";

@Module({
    controllers : [TaskController] // Un modulo continen muchos controladores

})
export class TaskModule{
    
}