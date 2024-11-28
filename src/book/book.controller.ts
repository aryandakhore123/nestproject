import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { BookGuard } from './book.guard';
// import { BookPipe } from './pipe/book.pipe';

@Controller('book')
export class BookController {
  @Get()
  @UseGuards(new BookGuard())
  findAllBook(): string {
    return 'this api will return  all book';
  }

  @Post()
  addBook(): string {
    throw new BadRequestException({
      statusCode: 590,
      error: 'This is my message',
    });
    return 'this api will add new book';
  }

  @Get('/:id')
  findBookById(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);

    return 'this api will return book by id';
  }

  @Post('adds')
  addBooks(@Body(new ValidationPipe()) book: BookDto): string {
    return 'add books';
  }
}
