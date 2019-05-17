import {Injectable} from '@angular/core';
import {HttpService} from '@/_service/http.service';
import {User} from '@/_model';

@Injectable({
    providedIn: 'root'
})
export class UserRegisterService {

    constructor(private httpService: HttpService) {
    }

    public register(user: User) {
        return this.httpService.$_post('user', user);
    }
}
