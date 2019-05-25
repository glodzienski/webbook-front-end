import {Injectable} from '@angular/core';
import {HttpHelper} from '@/_helper/http.helper';
import {User} from '@/_model';

@Injectable({
    providedIn: 'root'
})
export class UserRegisterService {

    constructor(private httpService: HttpHelper) {
    }

    public register(user: User) {
        return this.httpService.$_post('user', user);
    }
}
