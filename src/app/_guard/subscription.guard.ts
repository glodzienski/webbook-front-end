import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SubscriptionService} from '@/service';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionGuard implements CanActivate {
    private hasSubscription: boolean;

    constructor(private router: Router,
                private subscriptionService: SubscriptionService) {
    }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        await this.subscriptionService.get()
            .then(subscriptions => this.hasSubscription = subscriptions.length > 0);

        if (this.hasSubscription) {
            return true;
        }

        this.router.navigate(['/subscription']);
        return false;
    }
}
