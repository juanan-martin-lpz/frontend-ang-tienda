
import { CestaActions, CestaActionTypes } from '../actions/cesta.actions';

import { LineaPedido } from '../modelos/linea-pedido.model';
import { Producto } from '../modelos/producto.model';

import * as clone from 'clone';

export const cestaFeatureKey = 'cesta';

export interface State {
    articulos: LineaPedido[];
    total_cesta: number;
}

export const initialState: State = {
    articulos: [],
    total_cesta: 0
};


function calcularImporteCesta(lineas: LineaPedido[]): number {


    let r = (acc: number, total_linea: number) => acc + total_linea;

    return lineas.map(e => e.total_linea).reduce(r);

}

export function reducer(state = initialState, action: CestaActions): State {
    switch (action.type) {

        //Efecto
        case CestaActionTypes.LoadCesta:

            return state;

        case CestaActionTypes.LoadCestaSuccess:

            return { ...state, articulos: action.payload.cesta, total_cesta: calcularImporteCesta(action.payload.cesta) };

        case CestaActionTypes.LoadCestaFailure:
            return state;

        case CestaActionTypes.AniadirACesta:

            const c = clone(state.articulos);
            c.push(action.payload.producto);

            return { ...state, articulos: c, total_cesta: calcularImporteCesta(c) };

        case CestaActionTypes.QuitarDeCesta:

            const nuevaLista = state.articulos.filter(item => item.articulo._id != action.payload.producto.articulo._id);

            return { ...state, articulos: nuevaLista, total_cesta: calcularImporteCesta(nuevaLista) };

        case CestaActionTypes.IncrementarCesta:


            const cI = clone(state.articulos);

            const itemI = cI.find(e => e.articulo._id == action.payload.producto.articulo._id);

            itemI.cantidad++;

            // Calcular Importes
            itemI.total_linea = itemI.cantidad * itemI.articulo.precio;


            return { ...state, articulos: cI, total_cesta: calcularImporteCesta(cI) };


        case CestaActionTypes.DecrementarCesta:

            const cD = clone(state.articulos);
            const itemD = cD.find((e) => e.articulo._id == action.payload.producto.articulo._id);

            if (itemD.cantidad == 1) {
                return { ...state };
            }

            itemD.cantidad--;

            // Calcular Importes
            itemD.total_linea = itemD.cantidad * itemD.articulo.precio;


            return { ...state, articulos: cD, total_cesta: calcularImporteCesta(cD) };

        case CestaActionTypes.VaciarCesta:
            return state;

        // Efecto
        case CestaActionTypes.GuardarCesta:

            return state;

        case CestaActionTypes.GuardarCestaSuccess:

            return state;

        case CestaActionTypes.GuardarCestaFailure:

            return state;

        default:
            return state;
    }
}
