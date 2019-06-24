import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionRegisterModalComponent } from './subscription-register-modal.component';

describe('SubscriptionRegisterModalComponent', () => {
  let component: SubscriptionRegisterModalComponent;
  let fixture: ComponentFixture<SubscriptionRegisterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionRegisterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
