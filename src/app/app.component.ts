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

export class AppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    isLogged: boolean;
    private isLoggedObservable: Observable<boolean>;

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
