import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookController } from './app.controller';
import { BookService } from './book.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [UsersModule, BookModule],
  controllers: [BookController],
  providers: [BookService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
