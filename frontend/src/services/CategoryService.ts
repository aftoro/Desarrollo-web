import { BookService } from './BookService.js';

export class CategoryService {
  static getUniqueBookCategories(): string[] {
    const books = BookService.getBooks();
    const categories = books.map((book) => book.category);
    return Array.from(new Set(categories));
  }
}