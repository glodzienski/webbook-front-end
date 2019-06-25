import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { Book } from '@/model';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.less']
})
export class BookDetailComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Book,
              private bottomSheetRef: MatBottomSheetRef,
              private router: Router) {}

  public openBook(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.router.navigate(['/readingbook']);
  }
}
