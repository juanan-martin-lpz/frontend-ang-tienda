import { Action } from '@ngrx/store';

import { Producto } from '../modelos/producto.model';

export enum CatalogoActionTypes {
    CargarProductos = '[Pedido] Cargar Productos',
    CargarProductosSuccess = '[Pedido] Cargar Productos Success',
    CargarProductosFailure = '[Pedido] Cargar Productos Failure',
}

export class CargarProductos implements Action {
    readonly type = CatalogoActionTypes.CargarProductos;
}

export class CargarProductosSuccess implements Action {
    readonly type = CatalogoActionTypes.CargarProductosSuccess;
    constructor(public payload: { productos: Producto[] }) { }
}

export class CargarProductosFailure implements Action {
    readonly type = CatalogoActionTypes.CargarProductosFailure;
    constructor(public payload: { error: any }) { }
}

export type CatalogoActions =
    CargarProductos |
    CargarProductosSuccess |
    CargarProductosFailure;


