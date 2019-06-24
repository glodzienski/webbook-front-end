import {Injectable} from '@angular/core';
import {HttpHelper} from '@/_helper';
import {Subscription} from '@/model';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {
    private apiEndpoint = 'subscription';

    constructor(private httpHelper: HttpHelper) {
    }

    public store(subscription: Subscription): any {
        return this.httpHelper.$_post(this.apiEndpoint, subscription);
    }

    public get(): any {
        return this.httpHelper.$_get<Subscription>(this.apiEndpoint);
    }

    public cancel(subscription: Subscription): any {
        return this.httpHelper.$_delete(`${this.apiEndpoint}\/${subscription.code}`);
    }
}

