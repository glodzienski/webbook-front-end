import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCaseComponent } from './book-case.component';

describe('BookCaseComponent', () => {
  let component: BookCaseComponent;
  let fixture: ComponentFixture<BookCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
