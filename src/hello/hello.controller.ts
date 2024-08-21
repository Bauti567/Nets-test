import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request,Response } from 'express'; // Importacion express


@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: 'Hola response'
        })
        
    }

}
