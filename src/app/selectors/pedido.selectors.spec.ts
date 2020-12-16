import * as fromPedido from '../reducers/pedido.reducer';
import { selectPedidoState } from './pedido.selectors';

describe('Pedido Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPedidoState({
      [fromPedido.pedidoFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
