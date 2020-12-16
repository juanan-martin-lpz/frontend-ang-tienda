import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCatalogo from '../reducers/catalogo.reducer';

export const selectCatalogoState = createFeatureSelector<fromCatalogo.State>(
  fromCatalogo.catalogoFeatureKey
);
