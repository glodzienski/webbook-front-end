import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingbookComponent } from './readingbook.component';

describe('ReadingbookComponent', () => {
  let component: ReadingbookComponent;
  let fixture: ComponentFixture<ReadingbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
