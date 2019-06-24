import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import {AuthService} from '@/service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
<<<<<<< HEAD

export class AppComponent implements OnDestroy, OnInit {
=======
export class AppComponent implements OnDestroy {
>>>>>>> b7dc5003edb0fd0195ce16681e317ea7a59ae2e0
    mobileQuery: MediaQueryList;
    isLogged: boolean;
    private isLoggedObservable: Observable<boolean>;

    menuItems = [
        'Obras',
        'Favoritos',
        'Assinatura'
    ];

    constructor(changeDetectorRef: ChangeDetectorRef,
                media: MediaMatcher,
                private authService: AuthService,
                private router: Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
        this.isLoggedObservable = this.authService.currentTokenObservable;
        this.isLoggedObservable.subscribe((value) => (this.isLogged = value));
    }

    private mobileQueryListener: () => void;

    public onClickLogout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
