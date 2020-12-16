import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { CargarPedidoFailure, CargarPedidoSuccess, PedidoActionTypes, PedidoActions } from '../actions/pedido.actions';

import { CatalogoService } from '../tienda/catalogo.service';
import { Producto } from '../modelos/producto.model';

@Injectable()
export class PedidoEffects {

    @Effect()
    loadPedidos$ = this.actions$.pipe(
        ofType(PedidoActionTypes.CargarPedido),
        concatMap(() =>
            /** An EMPTY observable only emits completion. Replace with your own observable API request */
            EMPTY.pipe(
                map(({ status, pedido }) => new CargarPedidoSuccess({ pedido })),
                catchError(error => of(new CargarPedidoFailure({ error }))))
        )
    );


    constructor(private actions$: Actions<PedidoActions>,
        private catalogoService: CatalogoService) { }

}
