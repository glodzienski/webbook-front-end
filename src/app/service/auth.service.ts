import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthInfoDto, AuthLoginDto, AuthTokenDto} from '@/_dto';
import {HttpHelper} from '@/_helper/http.helper';
import {User} from '@/model';

@Injectable({providedIn: 'root'})
export class AuthService {
    private currentTokenSubject: BehaviorSubject<any>;
    public currentTokenObservable: Observable<any>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private httpHelper: HttpHelper) {
        this.currentTokenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')));
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.currentTokenObservable = this.currentTokenSubject.asObservable();
    }

    public get currentToken(): any {
        return this.currentTokenSubject.value;
    }

    public get currentUser(): User {
        return this.currentUserSubject.value;
    }

    public login(authLoginDTO: AuthLoginDto) {
        return this.httpHelper.$_post<AuthTokenDto>('auth/login', authLoginDTO)
            .then(({token}) => {
                localStorage.setItem('token', JSON.stringify(token));
                this.currentTokenSubject.next(token);
            });
    }

    public logout(): void {
        localStorage.removeItem('token');
        this.currentTokenSubject.next(null);
    }

    public validate(token: string): void {
        const authTokenDto = new AuthTokenDto();
        authTokenDto.token = token;

        this.httpHelper.$_post('auth/validate', authTokenDto)
            .then((response: AuthInfoDto) => {
                localStorage.setItem('user', JSON.stringify(response.user));
            });
    }

    public isLogged(): boolean {
        return !!this.currentToken;
    }
}
