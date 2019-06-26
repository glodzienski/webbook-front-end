import {Author} from './author';
import {Publisher} from './publisher';
import {BookCategory} from './bookCategory';
import {BookInfo} from './bookInfo';
import {BookFavorite} from '@/model/bookFavorite';

export class Book {
    code: string;
    name: string;
    views: boolean;
    downloads: number;
    active: boolean;
    filePath: string;
    bookInfo: BookInfo;
    bookCategory: BookCategory;
    author: Author;
    publisher: Publisher;
    bookFavorite: BookFavorite;
}
