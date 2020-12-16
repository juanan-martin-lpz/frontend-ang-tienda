
import { PedidoActions, PedidoActionTypes } from '../actions/pedido.actions';

import { Pedido } from '../modelos/pedidos.model';
import { LineaPedido } from '../modelos/linea-pedido.model';
import { Producto } from '../modelos/producto.model';

export const pedidoFeatureKey = 'pedido';

export interface State {
    pedido: Pedido;                            // Debe haber un pedido creado en todo momento, una vez que el usuario se loguea
    estadoPedido: 'VACIO' | 'CREADO' | 'GUARDADO' | 'ACEPTADO';        // El estado puede ser VACIO, CREADO, GUARDADO, ACEPTADO.
    error: string;
}

export const initialState: State = {
    pedido: null,
    estadoPedido: 'VACIO',
    error: '',
};

export function reducer(state = initialState, action: PedidoActions): State {
    switch (action.type) {

        case PedidoActionTypes.CrearPedido:
            return state;

        case PedidoActionTypes.CrearPedidoSuccess:
            return state;

        case PedidoActionTypes.CrearPedidoFailure:
            return state;

        case PedidoActionTypes.CargarPedido:
            return state;

        case PedidoActionTypes.CargarPedidoSuccess:

            return { ...state, pedido: action.payload.pedido, estadoPedido: action.payload.pedido.estado, error: '' };

        case PedidoActionTypes.CargarPedidoFailure:

            return { ...state, error: action.payload.error };

        case PedidoActionTypes.GuardarPedido:
            return state;

        case PedidoActionTypes.GuardarPedidoSuccess:
            return state;

        case PedidoActionTypes.GuardarPedidoFailure:
            return state;

        default:
            return state;
    }
}
