import {Component, OnInit} from '@angular/core';
import {BookDetailComponent} from '@/_component/book-detail/book-detail.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BookService} from '@/service';
import {Book} from '@/model';

@Component({
  selector: 'app-my-favorite-books',
  templateUrl: './my-favorite-books.component.html',
  styleUrls: ['./my-favorite-books.component.less']
})
export class MyFavoriteBooksComponent implements OnInit {
  public books: Book[];

  constructor(private bottomSheet: MatBottomSheet, private bookService: BookService) {

  }

  ngOnInit() {
      this.bookService.getFavorites()
          .then(books => (this.books = books));
  }

  openBottomSheet(book: Book): void {
      this.bottomSheet.open(BookDetailComponent, {
          data: book
      });
  }

  onClickFavorite(book: Book): void {
    this.bookService.favorite(book);
  }

}
