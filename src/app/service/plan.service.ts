import {Injectable} from '@angular/core';
import {Plan} from '@/model';
import {HttpHelper} from '@/_helper';

@Injectable({
    providedIn: 'root'
})
export class PlanService {

    private apiEndpoint = 'plan';

    constructor(private httpHelper: HttpHelper) {
    }

    public get(): any {
        return this.httpHelper.$_get<Plan>(this.apiEndpoint);
    }
}
