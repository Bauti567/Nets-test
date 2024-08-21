import { Injectable } from '@nestjs/common';

export interface User{
    name: string;
    age: number
}

@Injectable()
export class UsersService {
    private users = [
        {
            id:1,
            name: "Juan",
            phone: 1234
        },
        {
            id:2,
            name: "Manuel",
            phone: 1234
        }
    ]

    getUsers(): User{
        return {
            name: 'Object',
            age: 13
        }
    }


}
