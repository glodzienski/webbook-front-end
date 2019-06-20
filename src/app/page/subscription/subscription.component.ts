import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '@/service/subscription.service';
import {Subscription} from '@/model';
import {MatDialog} from '@angular/material';
import {SubscriptionRegisterModalComponent} from '@/_component/subscription-register-modal/subscription-register-modal.component';

@Component({
    selector: 'app-signature',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.less']
})
export class SubscriptionComponent implements OnInit {
    public subscription: Subscription;

    constructor(public modal: MatDialog,
                private subscriptionService: SubscriptionService) {
    }

    ngOnInit() {
        this.getSubscriptions();
    }

    private getSubscriptions(): void {
        this.subscriptionService.get()
            .then(subscription => (this.subscription = subscription));
    }

    public onClickRegisterSubscription(): void {
        this.modal
            .open(SubscriptionRegisterModalComponent, {
                width: '20%'
            })
            .afterClosed()
            .subscribe(_ => (this.getSubscriptions()));
    }
}
