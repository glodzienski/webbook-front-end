import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '@/service';
import {Subscription} from '@/model';
import {MatDialog} from '@angular/material';
import {SubscriptionRegisterModalComponent} from '@/_component/subscription-register-modal/subscription-register-modal.component';
import {AlertHelper} from '@/_helper';

@Component({
    selector: 'app-signature',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.less']
})
export class SubscriptionComponent implements OnInit {
    public subscription: Subscription[];

    constructor(public modal: MatDialog,
                private subscriptionService: SubscriptionService,
                private alertHelper: AlertHelper) {
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
            .open(SubscriptionRegisterModalComponent)
            .afterClosed()
            .subscribe(_ => this.getSubscriptions());
    }

    public onClickCancelSubscription(): void {
        this.subscriptionService.cancel(this.subscription[0])
            .then(_ => (this.getSubscriptions()))
            .catch(error => this.alertHelper.error(error));
    }

    public hasSubscription(): boolean {
        return !!this.subscription && this.subscription.length > 0;
    }
}
