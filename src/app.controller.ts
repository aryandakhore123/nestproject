import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { AppInterceptor } from './app.interceptor';
import { Request, Response } from 'express';

@Controller('book')
export class BookController {
  //nestjs provided with the object
  constructor(private bookService: BookService) {}

  // add book
  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }

  @Post('/app')
  @UseInterceptors(AppInterceptor)
  hello(@Req() req: Request, @Res() res: Response): any {
    return res.json(req.body);
  }

  // delete book
  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }

  //update book
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  //all all book
  @Get('/findAll')
  findAllBooks(): string {
    return this.bookService.findBooks();
  }
  @Get('/findAll')
  findAllBookssss(): string {
    return 'shsahdsadjksndsakjd'
  }
}
