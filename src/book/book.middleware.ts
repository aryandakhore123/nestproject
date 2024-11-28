import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const protocol = req.protocol; //http https
    const host = req.get('host'); //localhost:3000
    const url = req.originalUrl; //book
    const method = req.method; //get post
    const date = new Date();
    console.log(protocol + '://' + host + url + ' ' + method + ' ' + date);

    next();
  }
}
