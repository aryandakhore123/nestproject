import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  addBook(): string {
    return 'this will add book';
  }

  updateBook(): string {
    return 'this will update book';
  }

  deleteBook(): string {
    return 'this will delete book';
  }

  findBooks(): string {
    return 'this will find books';
  }
}
