import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction, Request, Response } from 'express';

function golbalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log(' global Middleware 1');
  next();
}

function golbalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log(' global Middleware 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(golbalMiddlewareOne);
  app.use(golbalMiddlewareTwo);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
