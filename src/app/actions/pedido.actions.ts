import { Action } from '@ngrx/store';

export enum PedidoActionTypes {
    CrearPedido = '[Pedido] Crear Pedido',
    CrearPedidoSuccess = '[Pedido] Crear Pedido Success',
    CrearPedidoFailure = '[Pedido] Crear Pedido Failure',

    GuardarPedido = '[Pedido] Guardar Pedidos',
    GuardarPedidoSuccess = '[Pedido] Guardar Pedido Success',
    GuardarPedidoFailure = '[Pedido] Guardar Pedido Failure',

    CargarPedido = '[Pedido] Cargar Pedidos',
    CargarPedidoSuccess = '[Pedido] Cargar Pedido Success',
    CargarPedidoFailure = '[Pedido] Cargar Pedido Failure'
}

export class CrearPedido implements Action {
    readonly type = PedidoActionTypes.CrearPedido;
}

export class CrearPedidoSuccess implements Action {
    readonly type = PedidoActionTypes.CrearPedidoSuccess;
    constructor(public payload: { pedido: any }) { }
}

export class CrearPedidoFailure implements Action {
    readonly type = PedidoActionTypes.CrearPedidoFailure;
    constructor(public payload: { error: any }) { }
}


export class GuardarPedido implements Action {
    readonly type = PedidoActionTypes.GuardarPedido;
}

export class GuardarPedidoSuccess implements Action {
    readonly type = PedidoActionTypes.GuardarPedidoSuccess;
    constructor(public payload: { pedido: any }) { }
}

export class GuardarPedidoFailure implements Action {
    readonly type = PedidoActionTypes.GuardarPedidoFailure;
    constructor(public payload: { error: any }) { }
}

export class CargarPedido implements Action {
    readonly type = PedidoActionTypes.CargarPedido;
}

export class CargarPedidoSuccess implements Action {
    readonly type = PedidoActionTypes.CargarPedidoSuccess;
    constructor(public payload: { pedido: any }) { }
}

export class CargarPedidoFailure implements Action {
    readonly type = PedidoActionTypes.CargarPedidoFailure;
    constructor(public payload: { error: any }) { }
}





export type PedidoActions =
    GuardarPedido |
    GuardarPedidoSuccess |
    GuardarPedidoFailure |
    CrearPedido |
    CrearPedidoSuccess |
    CrearPedidoFailure |
    CargarPedido |
    CargarPedidoSuccess |
    CargarPedidoFailure;
