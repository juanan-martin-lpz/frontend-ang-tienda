import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/modelos/login.model';

import { AppState } from '../../reducers/index';
import { LoginUser } from '../../actions/user.actions';
import { Router } from '@angular/router';

import { LoadCestaSuccess } from '../../actions/cesta.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public usuario: Login = {
        login: null,
        password: null
    };

    constructor(private store: Store<AppState>, private router: Router) {

        this.store.select('usuario').subscribe(({ usuario, token }) => {

            if (token != '') {
                this.store.dispatch(new LoadCestaSuccess({ cesta: usuario.cesta }))
                this.router.navigateByUrl('/');
            }

        });

    }

    ngOnInit(): void {
    }

    onLogin(): void {

        console.log(this.usuario);

        this.store.dispatch(new LoginUser(this.usuario));

    }
}
