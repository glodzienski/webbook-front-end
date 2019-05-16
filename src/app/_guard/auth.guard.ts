import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from '@/_service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLogged = this.authService.currentUserValue;
        const signRoutes = ['login', 'register'].includes(route.routeConfig.path);

        if (signRoutes) {
            if (isLogged) {
                this.router.navigate(['/']);
                return false;
            }

            return true;
        }

        if (isLogged) {
            return true;
        }


        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
