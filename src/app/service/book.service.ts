import {Injectable} from '@angular/core';
import {Book} from '@/model';
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
}
