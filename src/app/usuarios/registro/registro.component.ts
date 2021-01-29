import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';

import { NuevoUsuario } from '../../modelos/nuevousuario.model';
import { ClearError, PushError, RegisterUser } from 'src/app/actions/user.actions';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    public usuario: NuevoUsuario;

    public password: string;

    private mensaje: {} = null;
    public nerrors = 0;
    public errors = [];

    constructor(private router: Router, private store: Store<AppState>) {


        this.store.select('usuario').subscribe(({ nuevousuario }) => {
            this.usuario = nuevousuario;
        });

        this.store.select('usuario').subscribe(({ errors }) => {
            this.mensaje = errors;
            this.nerrors = this.mensaje != null ? Object.keys(this.mensaje).length : 0;

            if (this.mensaje != null) {
                for (const propiedad in this.mensaje) {
                    this.errors.push(`${propiedad}: ${this.mensaje[propiedad]}`);
                }
            }
        });

        if (!this.usuario) {
            this.usuario = {
                _id: '',
                nombre: '',
                apellidos: '',
                login: '',
                password: '',
                email: '',
                imagen: '',
                telefono: '',
                direccion: '',
                rol: 'CLIENTE',
                idioma: 'ES',
                cesta: [],
                historicoCesta: []
            };
        }
    }

    ngOnInit(): void {

    }

    public siguiente(): void {


        if (this.usuario.password == null || this.usuario.password.trim().length == 0) {
            this.store.dispatch(new PushError({ property: 'password', msg: 'El password es obligatorio' }));
            return;
        }

        if (this.usuario.password != this.password) {
            this.store.dispatch(new PushError({ property: 'password', msg: 'Los password no coinciden' }));
            return;
        }

        // set usuario
        this.store.dispatch(new RegisterUser({ nuevousuario: this.usuario }));

        this.router.navigateByUrl('usuarios/register/acceptterms');

    }
}
