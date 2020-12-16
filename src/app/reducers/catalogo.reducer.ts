
import { CatalogoActions, CatalogoActionTypes } from '../actions/catalogo.actions';


import { Producto } from '../modelos/producto.model';

export const catalogoFeatureKey = 'catalogo';

export interface State {

    productos: Producto[];
    error: string;

}

export const initialState: State = {
    productos: [],
    error: '',

};

export function reducer(state = initialState, action: CatalogoActions): State {
    switch (action.type) {

        case CatalogoActionTypes.CargarProductos:
            return state;

        case CatalogoActionTypes.CargarProductosSuccess:

            return { ...state, productos: action.payload.productos, error: '' };

        case CatalogoActionTypes.CargarProductosFailure:

            return { ...state, error: action.payload.error };


        default:
            return state;
    }
}
