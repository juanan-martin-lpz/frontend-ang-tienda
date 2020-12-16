import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { CargarProductos, CargarProductosFailure, CargarProductosSuccess, CatalogoActionTypes, CatalogoActions } from '../actions/catalogo.actions';
import { CatalogoService } from '../tienda/catalogo.service';




@Injectable()
export class CatalogoEffects {

    @Effect()
    loadCatalogos$ = this.actions$.pipe(
        ofType(CatalogoActionTypes.CargarProductos),
        concatMap(() =>
            /** An EMPTY observable only emits completion. Replace with your own observable API request */
            this.servicioProductos.getProductos().pipe(
                map(({ status, productos }) => new CargarProductosSuccess({ productos })),
                catchError(error => of(new CargarProductosFailure({ error }))))
        )
    );



    constructor(
        private actions$: Actions<CatalogoActions>,
        private servicioProductos: CatalogoService) { }

}
