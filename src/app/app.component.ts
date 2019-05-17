import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import {AuthService} from '@/_service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    private isLoggedSubject: BehaviorSubject<any>;
    isLogged: Observable<Boolean>;

    menuItems = [
        'Obras',
        'Favoritos',
        'Assinatura'
    ];

    private mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
        this.isLoggedSubject = new BehaviorSubject<any>(!!this.authService.currentUserValue);
        this.isLogged = this.isLoggedSubject.asObservable();
    }
    public get isLoggedValue(): Boolean {
        return this.isLoggedSubject.value;
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
