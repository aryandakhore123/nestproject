import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAllUser() {
    return 'This api returns all users';
  }

  @Post()
  addUser() {
    return 'This api adds a new user';
  }
}
