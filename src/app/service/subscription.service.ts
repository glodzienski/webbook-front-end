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

    store() {
        // TODO: falta implementar
    }

    public get(): any {
        return this.httpHelper.$_get<Subscription>(this.apiEndpoint);
    }
}

