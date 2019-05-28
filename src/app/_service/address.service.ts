import {Injectable} from '@angular/core';
import {Address} from '@/_model';
import {HttpHelper} from '@/_helper';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    private apiEndpoint = 'address';

    constructor(private httpHelper: HttpHelper) {
    }

    public store(address: Address) {
        return this.httpHelper.$_post(this.apiEndpoint, address);
    }
}
