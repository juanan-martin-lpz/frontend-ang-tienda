import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { NuevoUsuario } from '../modelos/nuevousuario.model';
import { Login } from '../modelos/login.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    constructor(private _http: HttpClient) { }

    listarUsuarios(): Observable<NuevoUsuario> {

        return this._http.get('http://localhost:3000/usuarios').pipe(
            pluck('usuarios')
        );
    }

    guardarUsuario(usuario: NuevoUsuario): Observable<any> {
        return this._http.post('http://localhost:3000/usuarios', usuario);
    }

    actualizarUsuario(usuario: Usuario): Observable<any> {
        return this._http.put('http://localhost:3000/usuarios/' + usuario._id, usuario);
    }

    borrarUsuario(usuario: Usuario): Observable<any> {
        return this._http.delete('http://localhost:3000/usuarios/' + usuario._id);
    }
}
