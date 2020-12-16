import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../modelos/login.model';

import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginServiceService {

    constructor(private _http: HttpClient) { }

    public login(login: Login): Observable<any> {
        return this._http.post('http://localhost:3000/login', login).pipe(
            tap(result => console.log(result)
            ));
    }
}
