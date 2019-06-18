import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '@/service/subscription.service';
import {Address, Plan, Subscription} from '@/model';
import {PlanService} from '@/service/plan.service';
import {AddressService} from '@/service';

@Component({
    selector: 'app-signature',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.less']
})
export class SubscriptionComponent implements OnInit {
    public subscription: Subscription;
    public plans: Plan[];
    public addresses: Address[];


    constructor(private subscriptionService: SubscriptionService,
                private planService: PlanService,
                private addressService: AddressService) {
    }

    ngOnInit() {

        this.subscriptionService.get()
            .then(subscription => (this.subscription = subscription));

        this.planService.get()
            .then(plans => (this.plans = plans));

        this.addressService.get()
            .then(addresses => (this.addresses = addresses));
    }

}
