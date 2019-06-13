import {Component, OnInit} from '@angular/core';
import {BookDetailComponent} from '@/_component/book-detail/book-detail.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {

  }
  openBottomSheet(): void {
    this._bottomSheet.open(BookDetailComponent);
  }

    ngOnInit() {

    }
}
