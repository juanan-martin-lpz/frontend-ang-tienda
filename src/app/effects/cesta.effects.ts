import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, mergeAll } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadCestaFailure, LoadCestaSuccess, CestaActionTypes, CestaActions } from '../actions/cesta.actions';
import { CestaService } from '../tienda/cesta.service';

import { LineaPedido } from '../modelos/linea-pedido.model';
import { ProductoVenta } from '../modelos/producto-venta.model';

@Injectable()
export class CestaEffects {

    @Effect()
    loadCestas$ = this.actions$.pipe(
        ofType(CestaActionTypes.LoadCesta),
        concatMap(() =>
            /** An EMPTY observable only emits completion. Replace with your own observable API request */
            EMPTY.pipe(
                map(({ status, cesta }) => new LoadCestaSuccess({ cesta })),
                catchError(error => of(new LoadCestaFailure({ error }))))
        )
    );


    @Effect()
    saveCestas$ = this.actions$.pipe(
        ofType(CestaActionTypes.GuardarCesta),
        concatMap((action) =>
            this.cestaService.saveCesta(action.payload.user, action.payload.cesta).pipe(
                map(({ status, cesta }) => new LoadCestaSuccess({ cesta })),
                catchError(error => of(new LoadCestaFailure({ error }))))
        )
    );


    constructor(
        private actions$: Actions<CestaActions>,
        private cestaService: CestaService) { }

}
