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

    public favorite(book: Book): void {
        const payload = new BookFavorite();
        payload.book = book;

        this.httpHelper.$_post(`${this.apiEndpoint}/favorite`, payload);
    }

    public getFavorites(): any {
        return this.httpHelper.$_get<Book[]>(`${this.apiEndpoint}/favorite`);
    }
}
