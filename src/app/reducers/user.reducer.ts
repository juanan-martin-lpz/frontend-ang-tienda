
import { UserActions, UserActionTypes } from '../actions/user.actions';

import { Usuario } from '../modelos/usuario.model';

import { clone } from 'ramda';

export const userFeatureKey = 'usuario';

export interface State {
    usuario: Usuario;                  // El Usuario logueado
    nuevousuario: Usuario;             // El Usuario en creacion
    token: string;                     // Token de seguridad
    errors: {};                  // Errores en el proceso
    error: object;
}

export const initialState: State = {
    usuario: null,
    nuevousuario: null,
    token: '',
    errors: {},
    error: {}

};

export function UsuariosReducer(state = initialState, action: UserActions): State {
    switch (action.type) {

        case UserActionTypes.LoginUser:
            return { ...state, error: {} };

        case UserActionTypes.LoginUserSuccess:

            return { ...state, usuario: action.payload.usuario, token: action.payload.token };

        case UserActionTypes.LoginUserFailure:

            return { ...state, error: action.payload.error };

        case UserActionTypes.RegisterUser:

            return { ...state, nuevousuario: action.payload.nuevousuario };

        case UserActionTypes.RegisterUserTermsAccepted:

            return { ...state };

        case UserActionTypes.RegisterUserSuccess:

            return { ...state, nuevousuario: null, error: null, errors: null };

        case UserActionTypes.RegisterUserFailure:

            console.log(action.payload.errors);

            return { ...state, errors: action.payload.errors };

        case UserActionTypes.ClearErrors:

            return { ...state, errors: null };

        case UserActionTypes.PushError:

            let newErrors = clone(state.errors);

            newErrors[action.payload.property].push(action.payload.msg);

            return { ...state, errors: newErrors };

        default:
            return state;
    }
}
