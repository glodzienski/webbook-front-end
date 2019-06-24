import {Injectable} from '@angular/core';
import {HttpHelper} from '@/_helper/http.helper';
import {User} from '@/model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiEndpoint = 'user';

    constructor(private httpHelper: HttpHelper) {
    }

    public store(user: User) {
        return this.httpHelper.$_post(this.apiEndpoint, user);
    }

    public update(user: User) {
        return this.httpHelper.$_put(`${this.apiEndpoint}/${user.code}`, user);
    }
}
