import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

import * as fromPedido from './pedido.reducer';
import * as fromCatalogo from './catalogo.reducer';
import * as fromCesta from './cesta.reducer';
import * as fromUsuario from './user.reducer';



export interface AppState {

    usuario: fromUsuario.State;
    pedido: fromPedido.State;
    catalogo: fromCatalogo.State;
    cesta: fromCesta.State;

}

export const reducers: ActionReducerMap<AppState> = {

    usuario: fromUsuario.UsuariosReducer,
    pedido: fromPedido.reducer,
    catalogo: fromCatalogo.reducer,
    cesta: fromCesta.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
