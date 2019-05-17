import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import {AuthService} from '@/_service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    private isLoggedSubject: BehaviorSubject<any>;
    isLogged: Observable<boolean>;

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
        this.isLoggedSubject = new BehaviorSubject<any>(!!this.authService.currentUserValue);
        this.isLogged = this.isLoggedSubject.asObservable();
    }

    private mobileQueryListener: () => void;

    public get isLoggedValue(): boolean {
        return this.isLoggedSubject.value;
    }

    public onClickLogout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
