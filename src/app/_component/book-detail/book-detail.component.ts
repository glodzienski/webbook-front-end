import {Component, Inject} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Router} from '@angular/router';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {Book} from '@/model';
import {AuthService, BookService} from '@/service';


@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.less']
})
export class BookDetailComponent {
    public favoriteIcon: string;

    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Book,
                private bottomSheetRef: MatBottomSheetRef,
                private router: Router,
                private bookService: BookService,
                public authService: AuthService) {
        this.decideFavoriteIcon();
    }

    public openBook(): void {
        this.bottomSheetRef
            .afterDismissed()
            .subscribe(_ => (this.router.navigate(['/readingbook'])));
        this.bottomSheetRef.dismiss();
    }

    public onClickFavorite(): void {
        if (this.data.bookFavorite) {
            this.bookService.desfavorite(this.data.bookFavorite)
                .then(_ => this.data.bookFavorite = null);
            this.decideFavoriteIcon();
            return;
        }

        this.bookService.favorite(this.data)
            .then(bookFavorite => this.data.bookFavorite = bookFavorite);
        this.decideFavoriteIcon();
    }

    private decideFavoriteIcon(): void {
        this.favoriteIcon = this.data.bookFavorite
            ? 'star'
            : 'star_border';
    }
}
