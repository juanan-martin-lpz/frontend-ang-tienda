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

    public loginError: boolean = false;
    public errorMessage: string = "";

    constructor(private store: Store<AppState>, private router: Router) {

        // Subscripcion para cuando el login es correcto
        // Despachamos la lectura de la cestas que pudiera tener el usuario
        this.store.select('usuario').subscribe(({ usuario, token }) => {

            if (token != '') {
                this.store.dispatch(new LoadCestaSuccess({ cesta: usuario.cesta }))
                this.router.navigateByUrl('/');
            }

        });

        // Subscripcion para cuando el login es incorrecto.
        // Limpiamos los datos de usuario porque en los segundos intentos NO actualiza el objeto desde la vista
        this.store.select('usuario').subscribe(({ error }) => {

            if (error["error"] != undefined) {

                this.loginError = true;

                let oE: any = error["error"];

                this.errorMessage = oE["error"];

                this.usuario = { login: null, password: null }

            }

        });


    }

    ngOnInit(): void {
    }

    onLogin(): void {

        this.loginError = false;
        this.errorMessage = '';

        this.store.dispatch(new LoginUser(this.usuario));

    }
}
