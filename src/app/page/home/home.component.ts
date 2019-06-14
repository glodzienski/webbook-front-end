import {Component, OnInit} from '@angular/core';
import {BookDetailComponent} from '@/_component/book-detail/book-detail.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {BookService} from '@/_service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    public books: Book[];

  constructor(private _bottomSheet: MatBottomSheet, private bookService: BookService) {

  }
  openBottomSheet(book: Book): void {
    this._bottomSheet.open(BookDetailComponent, {
      data: book
    });
  }

    ngOnInit() {
      this.bookService.get()
        .then(books => (this.books = books));
    }
}
