import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSettingsComponent } from './address-settings.component';

describe('AddressSettingsComponent', () => {
  let component: AddressSettingsComponent;
  let fixture: ComponentFixture<AddressSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
