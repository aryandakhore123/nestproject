import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BookGuard implements CanActivate {
  // public key: string = 'BHNDFHBDFNFNFN#@#$';
  public username: string = 'aryan';
  public password: string = 'aryan123';
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (
      request.header('username') == undefined ||
      request.header('password') == undefined
    )
      return false;
    return (
      request.header('username') === this.username &&
      request.header('password') === this.password
    );
  }
}
