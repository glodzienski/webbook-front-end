import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthLoginDTO} from '@/_dto';
import {HttpService} from '@/_service/http.service';
import {AuthTokenDTO} from '@/_dto/AuthTokenDTO';

@Injectable({providedIn: 'root'})
export class AuthService {
    private currentTokenSubject: BehaviorSubject<any>;
    public currentTokenObservable: Observable<any>;

    constructor(private httpService: HttpService) {
        this.currentTokenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')));
        this.currentTokenObservable = this.currentTokenSubject.asObservable();
    }

    public refresh() {
        this.currentTokenSubject.next(JSON.parse(localStorage.getItem('token')));
    }

    public get currentToken(): any {
        return this.currentTokenSubject.value;
    }

    login(authLoginDTO: AuthLoginDTO) {
        return this.httpService.$_post<AuthTokenDTO>('auth/login', authLoginDTO)
            .then(({token}) => {
                localStorage.setItem('token', JSON.stringify(token));
                this.currentTokenSubject.next(token);
            });
    }

    logout() {
        localStorage.removeItem('token');
        this.currentTokenSubject.next(null);
    }
}
