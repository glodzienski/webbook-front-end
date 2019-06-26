import {Component, Input, OnInit} from '@angular/core';
import {Book} from '@/model';
import {MatBottomSheet} from '@angular/material';
import {BookService} from '@/service';
import {BookDetailComponent} from '@/_component/book-detail/book-detail.component';

@Component({
    selector: 'app-book-case',
    templateUrl: './book-case.component.html',
    styleUrls: ['./book-case.component.less']
})
export class BookCaseComponent implements OnInit {

    public books: Book[];

    @Input() favorites: boolean;

    constructor(private bottomSheet: MatBottomSheet, private bookService: BookService) {

    }

    public ngOnInit() {
        if (this.favorites == null) {
            this.favorites = false;

            this.bookService.get()
                .then(books => (this.books = books));
            return;
        }

        this.bookService.getFavorites()
            .then(books => (this.books = books));
    }

    public openBottomSheet(book: Book): void {
        this.bottomSheet.open(BookDetailComponent, {
            data: book
        });
    }

    public doesHaveBooks(): boolean {
        return !!this.books && this.books.length > 0;
    }
}
