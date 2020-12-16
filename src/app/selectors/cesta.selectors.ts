import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCesta from '../reducers/cesta.reducer';

export const selectCestaState = createFeatureSelector<fromCesta.State>(
  fromCesta.cestaFeatureKey
);
