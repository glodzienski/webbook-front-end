import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {Book} from '@/_model';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.less']
})
export class BookDetailComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Book) {}

  openLink(event: MouseEvent): void {
    // this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
