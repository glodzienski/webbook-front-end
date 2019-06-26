import {Component, Input, OnInit} from '@angular/core';
import {Book, BookFavorite} from '@/model';
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
    public booksFavorites: BookFavorite[];

    @Input() favorites: boolean;

    constructor(private bottomSheet: MatBottomSheet, private bookService: BookService) {

    }

    public ngOnInit() {
        if (this.favorites == null) {
            this.favorites = false;

            this.bookService.get()
                .then(books => (this.books = books))
                .then(_ => {
                    this.bookService.getFavorites()
                        .then(booksFavorites => (this.booksFavorites = booksFavorites));
                });
            return;
        }

        this.bookService.getFavorites()
            .then(booksFavorites => (this.booksFavorites = booksFavorites));
    }

    public openBottomSheet(book: Book): void {
        const bookFavorite = this.booksFavorites.find(fav => fav.book.code === book.code);
        if (bookFavorite) {
            book.bookFavorite = bookFavorite;
        }

        this.bottomSheet
            .open(BookDetailComponent, {
                data: book
            })
            .afterDismissed()
            .subscribe(_ => this.ngOnInit());
    }

    public doesHaveBooks(): boolean {
        return !!this.books && this.books.length > 0;
    }

    public doesHaveFavoritesBooks(): boolean {
        return !!this.booksFavorites && this.booksFavorites.length > 0;
    }
}
