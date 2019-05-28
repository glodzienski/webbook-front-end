import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRegisterModalComponent } from './address-register-modal.component';

describe('AddressRegisterModalComponent', () => {
  let component: AddressRegisterModalComponent;
  let fixture: ComponentFixture<AddressRegisterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressRegisterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
