import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class HttpHelper {

    constructor(private http: HttpClient) {
    }

    private validateIfHttpMethodIsAllowed(httpMethodWanted: string): boolean {
        return [
            'post',
            'get',
            'put',
            'patch',
            'delete'
        ].includes(httpMethodWanted);
    }

    private buildHttpHeader(): object {
        const token = JSON.parse(localStorage.getItem('token'));

        if (token) {
            return {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    token
                })
            };
        }

        return {};
    }

    private isBodilessMethod(method: string): boolean {
        return [
            'get',
            'delete'
        ].includes(method);
    }

    private build<T>(httpMethod: string, apiPath: string, payload: any) {
        return new Promise((resolver, rejector) => {
            if (this.validateIfHttpMethodIsAllowed(httpMethod)) {
                const fullUrl = `${environment.apiUrl}${apiPath}`;
                const httpOptions = this.buildHttpHeader();
                const httpClientParameters = this.isBodilessMethod(httpMethod)
                    ? [fullUrl, httpOptions]
                    : [fullUrl, payload, httpOptions];

                this.http[httpMethod]<T>(...httpClientParameters)
                    .subscribe(data => resolver(data), rejector);

                return;
            }
            rejector(`Método ${httpMethod} não configurado`);
        });
    }

    public $_post<T>(apiPath: string, payload: any = null) {
        return this.build<T>('post', apiPath, payload);
    }

    public $_get<T>(apiPath: string, payload: any = null) {
        return this.build<T>('get', apiPath, payload);
    }

    public $_put<T>(apiPath: string, payload: any = null) {
        return this.build<T>('put', apiPath, payload);
    }

    public $_patch<T>(apiPath: string, payload: any = null) {
        return this.build<T>('patch', apiPath, payload);
    }

    public $_delete<T>(apiPath: string, payload: any = null) {
        return this.build<T>('delete', apiPath, payload);
    }
}
