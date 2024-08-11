import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id:1,
            name: 'Jhon Doe',
            phone: '12345'
        },
        {
            id:2,
            name: 'Jhon Doe',
            phone: '12345'
        }
    ];
    getUsers(){
        return this.users
    }
}
