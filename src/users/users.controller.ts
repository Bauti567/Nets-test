import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService){

    }
    @Get('/users')
    getUsers(){
        return this.usersService.getUsers()
    }

    @Post('/users')
    createTask(){
        return 'Creando usuarios'

    }

    @Put('/users')
    updateTask(){
        return 'Actualizando users'
        
    }

    @Delete('/users')
    deleteTask(){
        return 'Eliminando a el usuario'
    }

    @Patch('/users')
    updateTaskStatus(){
        return 'Actualizando estatus de usuario con patch'
    }


}
