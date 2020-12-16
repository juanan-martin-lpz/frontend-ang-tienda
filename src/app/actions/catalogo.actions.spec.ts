import * as CatalogoActions from './catalogo.actions';

describe('Catalogo', () => {
  it('should create an instance', () => {
    expect(new CatalogoActions.LoadCatalogos()).toBeTruthy();
  });
});
