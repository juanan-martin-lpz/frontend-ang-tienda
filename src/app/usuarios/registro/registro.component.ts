import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';

import { NuevoUsuario } from '../../modelos/nuevousuario.model';
import { RegisterUser } from 'src/app/actions/user.actions';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    public usuario: NuevoUsuario;

    public password: string;

    public mensaje: string[];

    constructor(private router: Router, private store: Store<AppState>) {


        this.store.select('usuario').subscribe(({ nuevousuario }) => {
            this.usuario = nuevousuario;
        });

        this.store.select('usuario').subscribe(({ errors }) => {
            this.mensaje = errors;
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

        this.mensaje = [];

        if (this.usuario.password == null || this.usuario.password.trim().length == 0) {
            this.mensaje.push('El password es ser obligatorio');
            return;
        }

        if (this.usuario.password != this.password) {
            this.mensaje.push('Los passwords no coinciden');
            return;
        }

        // set usuario
        this.store.dispatch(new RegisterUser({ nuevousuario: this.usuario }));

        this.router.navigateByUrl('usuarios/register/acceptterms');

    }
}
