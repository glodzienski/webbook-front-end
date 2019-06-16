import {Component, OnInit} from '@angular/core';
import {BookDetailComponent} from '@/_component/book-detail/book-detail.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BookService} from '@/service';
import {Book} from '@/model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    public books: Book[];

    constructor(private bottomSheet: MatBottomSheet, private bookService: BookService) {

    }

    ngOnInit() {
        this.bookService.get()
            .then(books => (this.books = books));
    }

    openBottomSheet(book: Book): void {
        this.bottomSheet.open(BookDetailComponent, {
            data: book
        });
    }
}
