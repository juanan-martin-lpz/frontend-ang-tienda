
import { UserActions, UserActionTypes } from '../actions/user.actions';

import { Usuario } from '../modelos/usuario.model';

export const userFeatureKey = 'usuario';

export interface State {
    usuario: Usuario;                  // El Usuario logueado
    nuevousuario: Usuario;             // El Usuario en creacion
    token: string;                     // Token de seguridad
    errors: {};                  // Errores en el proceso
}

export const initialState: State = {
    usuario: null,
    nuevousuario: null,
    token: '',
    errors: {},

};

export function UsuariosReducer(state = initialState, action: UserActions): State {
    switch (action.type) {

        case UserActionTypes.LoginUser:
            return state;

        case UserActionTypes.LoginUserSuccess:

            return { ...state, usuario: action.payload.usuario, token: action.payload.token };

        case UserActionTypes.LoginUserFailure:

            return { ...state, errors: action.payload.errors };

        case UserActionTypes.RegisterUser:

            return { ...state, nuevousuario: action.payload.nuevousuario };

        case UserActionTypes.RegisterUserTermsAccepted:

            return { ...state };

        case UserActionTypes.RegisterUserSuccess:

            return { ...state, nuevousuario: null, errors: {} };

        case UserActionTypes.RegisterUserFailure:

            console.log(action.payload.errors);

            return { ...state, errors: action.payload.errors };

        default:
            return state;
    }
}
