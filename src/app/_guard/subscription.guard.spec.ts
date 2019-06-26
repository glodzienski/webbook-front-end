import { TestBed, async, inject } from '@angular/core/testing';

import { SubscriptionGuard } from './subscription.guard';

describe('SubscriptionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionGuard]
    });
  });

  it('should ...', inject([SubscriptionGuard], (guard: SubscriptionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
