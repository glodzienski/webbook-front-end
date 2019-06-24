import {Injectable} from '@angular/core';
import {Address} from '@/model';
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

    public get(): any {
        return this.httpHelper.$_get<Address[]>(this.apiEndpoint);
    }

    public delete(address: Address): any {
        return this.httpHelper.$_delete(`${this.apiEndpoint}/${address.code}`);
    }
}
