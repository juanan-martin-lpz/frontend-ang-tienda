import { Action } from '@ngrx/store';
import { Login } from '../modelos/login.model';
import { Usuario } from '../modelos/usuario.model';

export enum UserActionTypes {
    LoginUser = '[User] Login User',
    LoginUserSuccess = '[User] Login User Success',
    LoginUserFailure = '[User] Login User Failure',
    RegisterUser = '[User] Register User',
    RegisterUserSuccess = '[User] Register User Success',
    RegisterUserFailure = '[User] Register User Failure',
    RegisterUserTermsAccepted = '[User] Register User Terms Aceptance',
    ClearErrors = '[User] Clear Validation Errors',
    PushError = '[User] Push Validation Error',


}

export class LoginUser implements Action {
    readonly type = UserActionTypes.LoginUser;
    constructor(public login: Login) { }
}

export class LoginUserSuccess implements Action {
    readonly type = UserActionTypes.LoginUserSuccess;
    constructor(public payload: { usuario: Usuario, token: string }) { }                    // payload: El usuario logueado, mas el token
}

export class LoginUserFailure implements Action {
    readonly type = UserActionTypes.LoginUserFailure;
    constructor(public payload: { error: object }) { }                   // payload: El mensaje de error
}


export class RegisterUser implements Action {
    readonly type = UserActionTypes.RegisterUser;
    constructor(public payload: { nuevousuario: Usuario }) { }                    // payload: El usuario registrado
}

export class RegisterUserSuccess implements Action {
    readonly type = UserActionTypes.RegisterUserSuccess;
    constructor(public payload: { usuario: Usuario }) { }                    // payload: El usuario registrado
}

export class RegisterUserTermsAccepted implements Action {
    readonly type = UserActionTypes.RegisterUserTermsAccepted;
    constructor(public payload: { nuevousuario: Usuario }) { }                    // payload: Aceptacion de terminos
}

export class RegisterUserFailure implements Action {
    readonly type = UserActionTypes.RegisterUserFailure;
    constructor(public payload: { errors: {} }) { }                   // payload: El mensaje de error
}

export class ClearError implements Action {
    readonly type = UserActionTypes.ClearErrors;
}

export class PushError implements Action {
    readonly type = UserActionTypes.PushError;
    constructor(public payload: { property: string, msg: string }) { }                    // payload: El usuario registrado
}




export type UserActions =
    LoginUser |
    LoginUserSuccess |
    LoginUserFailure |
    RegisterUser |
    RegisterUserSuccess |
    RegisterUserFailure |
    RegisterUserTermsAccepted |
    ClearError |
    PushError;

