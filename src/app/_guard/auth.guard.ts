import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from '@/service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLogged = this.authService.currentToken;
        const signRoutes = ['login', 'register'].includes(route.routeConfig.path);

        if (signRoutes) {
            if (isLogged) {
                this.router.navigate(['/']);
                return false;
            }

            return true;
        }

        if (isLogged) {
            this.authService.validate(isLogged);
            return true;
        }


        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
