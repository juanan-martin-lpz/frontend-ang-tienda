import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Login } from '../modelos/login.model';



@Injectable({
    providedIn: 'root'
})
export class LoginServiceService {

    constructor(private _http: HttpClient) { }

    public login(login: Login): Observable<any> {
        return this._http.post('http://localhost:3000/login', login); //.pipe(
        //    pluck('error')
        //);
    }
}
