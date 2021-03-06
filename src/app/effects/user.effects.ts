import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { tap } from 'rxjs/operators';


import { LoginUserFailure, LoginUserSuccess, UserActionTypes, UserActions, RegisterUserTermsAccepted, RegisterUserSuccess, RegisterUserFailure, ClearError } from '../actions/user.actions';

import { LoadCestaSuccess } from '../actions/cesta.actions';

import { LoginServiceService } from '../servicios/login-service.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable()
export class UserEffects {

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(UserActionTypes.LoginUser),
        concatMap((action) =>
            this.loginService.login(action.login).pipe(
                map(({ usuario, token }) => new LoginUserSuccess({ usuario, token })),
                catchError((error: object) => of(new LoginUserFailure({ error: error }))))
        )
    );


    @Effect()
    insertUsers$ = this.actions$.pipe(
        ofType(UserActionTypes.RegisterUserTermsAccepted),
        concatMap((action) =>
            this.usuariosService.guardarUsuario(action.payload.nuevousuario).pipe(
                tap(r => new ClearError()),
                map(({ status, usuario }) => new RegisterUserSuccess({ usuario })),
                catchError(({ error }) => of(new RegisterUserFailure({ errors: error.errors }))))
        )
    );


    constructor(
        private actions$: Actions<UserActions>,
        private loginService: LoginServiceService,
        private usuariosService: UsuariosService) { }

}
