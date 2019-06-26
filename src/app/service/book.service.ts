import {Injectable} from '@angular/core';
import {Book, BookFavorite} from '@/model';
import {HttpHelper} from '@/_helper';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private apiEndpoint = 'book';

    constructor(private httpHelper: HttpHelper) {
    }

    public get(): any {
        return this.httpHelper.$_get<Book[]>(this.apiEndpoint);
    }

    public favorite(book: Book): any {
        const payload = new BookFavorite();
        payload.book = book;

        return this.httpHelper.$_post(`${this.apiEndpoint}/favorite`, payload);
    }

    public desfavorite(bookFavorite: BookFavorite): any {
        return this.httpHelper.$_delete(`${this.apiEndpoint}/favorite/${bookFavorite.code}`);
    }

    public getFavorites(): any {
        return this.httpHelper.$_get<Book[]>(`${this.apiEndpoint}/favorite`);
    }
}
