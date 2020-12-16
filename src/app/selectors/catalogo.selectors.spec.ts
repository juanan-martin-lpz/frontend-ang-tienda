import * as fromCatalogo from '../reducers/catalogo.reducer';
import { selectCatalogoState } from './catalogo.selectors';

describe('Catalogo Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCatalogoState({
      [fromCatalogo.catalogoFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
