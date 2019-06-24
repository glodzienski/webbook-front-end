import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoriteBooksComponent } from './my-favorite-books.component';

describe('MyFavoriteBooksComponent', () => {
  let component: MyFavoriteBooksComponent;
  let fixture: ComponentFixture<MyFavoriteBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavoriteBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavoriteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
