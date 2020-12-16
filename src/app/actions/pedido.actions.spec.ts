import * as PedidoActions from './pedido.actions';

describe('Pedido', () => {
  it('should create an instance', () => {
    expect(new PedidoActions.LoadPedidos()).toBeTruthy();
  });
});
