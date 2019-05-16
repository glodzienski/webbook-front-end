import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthLoginDTO} from '@/_dto';
import {HttpService} from '@/_service/http.service';

@Injectable({providedIn: 'root'})
export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private httpService: HttpService) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(authLoginDTO: AuthLoginDTO) {
        return this.httpService.$_post<string>('auth/login', authLoginDTO)
            .then(({ token }) => {
                localStorage.setItem('token', JSON.stringify(token));
                this.currentUserSubject.next(token);
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
