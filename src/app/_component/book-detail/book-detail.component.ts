import {Component, Inject} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Router} from '@angular/router';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {Book, BookFavorite} from '@/model';
import {BookService} from '@/service';


@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.less']
})
export class BookDetailComponent {
    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Book,
                private bottomSheetRef: MatBottomSheetRef,
                private router: Router,
                private bookService: BookService) {
    }

    public openBook(event: MouseEvent): void {
        this.bottomSheetRef
            .afterDismissed()
            .subscribe(_ => (this.router.navigate(['/readingbook'])));
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }

    public onClickFavorite(book: Book): void {
        this.bookService.favorite(book)
            .then(bookFavorite => (this.data.bookFavorite = bookFavorite));
    }

    public getFavoriteIcon(bookFavorite: BookFavorite): string {
        return bookFavorite
            ? 'star'
            : 'star_border';
    }
}
