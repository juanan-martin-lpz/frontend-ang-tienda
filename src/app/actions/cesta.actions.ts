import { Action } from '@ngrx/store';

import { LineaPedido } from '../modelos/linea-pedido.model';
import { ProductoVenta } from '../modelos/producto-venta.model';

export enum CestaActionTypes {
    InitCesta = '[Cesta] Inicializa Cesta',
    LoadCesta = '[Cesta] Load Cesta',
    LoadCestaSuccess = '[Cesta] Load Cesta Success',
    LoadCestaFailure = '[Cesta] Load Cesta Failure',

    IncrementarCesta = '[Cesta] Incrementa Unidad en articulo de Cesta',
    DecrementarCesta = '[Cesta] Decrementa Unidad en articulo de Cesta',
    VaciarCesta = '[Cesta] Vacia la Cesta',

    AniadirACesta = '[Cesta] Aniade Articulo a Cesta',
    QuitarDeCesta = '[Cesta] Quita articulo de Cesta',

    GuardarCesta = '[Cesta] Guardar Cesta',
    GuardarCestaSuccess = '[Cesta] Guardar Cesta Success',
    GuardarCestaFailure = '[Cesta] Guardar Cesta Failure',

}

export class InitCesta implements Action {
    readonly type = CestaActionTypes.InitCesta;
}

export class LoadCesta implements Action {
    readonly type = CestaActionTypes.LoadCesta;
}

export class LoadCestaSuccess implements Action {
    readonly type = CestaActionTypes.LoadCestaSuccess;
    constructor(public payload: { cesta: LineaPedido[] }) { }
}

export class LoadCestaFailure implements Action {
    readonly type = CestaActionTypes.LoadCestaFailure;
    constructor(public payload: { error: any }) { }
}

export class AniadirACesta implements Action {
    readonly type = CestaActionTypes.AniadirACesta;
    constructor(public payload: { producto: LineaPedido }) { }
}

export class QuitarDeCesta implements Action {
    readonly type = CestaActionTypes.QuitarDeCesta;
    constructor(public payload: { producto: LineaPedido }) { }
}

export class IncrementarCesta implements Action {
    readonly type = CestaActionTypes.IncrementarCesta;
    constructor(public payload: { producto: LineaPedido }) { }

}

export class DecrementarCesta implements Action {
    readonly type = CestaActionTypes.DecrementarCesta;
    constructor(public payload: { producto: LineaPedido }) { }
}

export class VaciarCesta implements Action {
    readonly type = CestaActionTypes.VaciarCesta;
}


export class GuardarCesta implements Action {
    readonly type = CestaActionTypes.GuardarCesta;
    constructor(public payload: { user: string, cesta: LineaPedido[] }) { }
}

export class GuardarCestaSuccess implements Action {
    readonly type = CestaActionTypes.GuardarCestaSuccess;
    constructor(public payload: { cesta: LineaPedido[] }) { }
}

export class GuardarCestaFailure implements Action {
    readonly type = CestaActionTypes.GuardarCestaFailure;
    constructor(public payload: { error: any }) { }
}

export type CestaActions =
    InitCesta |
    LoadCesta |
    LoadCestaSuccess |
    LoadCestaFailure |
    IncrementarCesta |
    DecrementarCesta |
    AniadirACesta |
    QuitarDeCesta |
    VaciarCesta |
    GuardarCesta |
    GuardarCestaSuccess |
    GuardarCestaFailure;

