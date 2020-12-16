import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPedido from '../reducers/pedido.reducer';

export const selectPedidoState = createFeatureSelector<fromPedido.State>(
  fromPedido.pedidoFeatureKey
);
