import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegisterUserTermsAccepted } from 'src/app/actions/user.actions';
import { Usuario } from 'src/app/modelos/usuario.model';
import { AppState } from '../../reducers/index';


@Component({
    selector: 'app-aceptacion',
    templateUrl: './aceptacion.component.html',
    styleUrls: ['./aceptacion.component.css']
})
export class AceptacionComponent implements OnInit {

    public acepta = false;

    public mensaje: string[];

    private usuario: Usuario;

    constructor(private router: Router, private store: Store<AppState>) {

        this.store.select('usuario').subscribe(({ nuevousuario }) => {
            this.usuario = nuevousuario;
        });
    }

    ngOnInit(): void {
    }

    public registrar(): void {

        if (!this.acepta) {
            this.mensaje.push('Debe aceptar los terminos de uso');
            return;
        }

        this.store.dispatch(new RegisterUserTermsAccepted({ nuevousuario: this.usuario }));

        this.router.navigateByUrl('/');

        // if (this.sesion.hasKey('usuario')) {

        //     const usuario = this.sesion.getItem('usuario');

        //     usuario.rol = 'CLIENTE';
        //     usuario.imagen = '';

        //     this.usuarioService.guardarUsuario(usuario)
        //         .subscribe(
        //             data => {
        //                 console.log(data);

        //                 if (!data.status) {
        //                     // Error
        //                     this.sesion.setItem('error', data.error);
        //                     this.router.navigateByUrl('/usuarios/register');
        //                 }
        //                 else {
        //                     // Acierto
        //                     this.sesion.removeItem('usuario');
        //                     this.router.navigateByUrl('/');
        //                 }
        //             },
        //             error => {
        //                 // Error
        //                 this.sesion.setItem('error', error.error);
        //                 this.router.navigateByUrl('/usuarios/register');
        //             }
        //         );
        // }
    }

}
