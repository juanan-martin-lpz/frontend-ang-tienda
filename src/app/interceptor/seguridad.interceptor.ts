import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers/index';


@Injectable()
export class InterceptorToken implements HttpInterceptor {

    token: string;

    //constructor(private sesion: SessionService) {
    constructor(private store: Store<AppState>) {

        this.store.select('usuario').subscribe(({ token }) => {
            this.token = token;
        });

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //const token = this.sesion.getItem('token');

        //let token = '';

        // this.store.select('token').subscribe(t => {
        //     token = t;
        // });

        if (this.token) {
            console.log(this.token);

            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`,
                }
            });
        }

        console.log(request);

        return next.handle(request);

    }
}
