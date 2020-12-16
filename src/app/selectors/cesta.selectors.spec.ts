import * as fromCesta from '../reducers/cesta.reducer';
import { selectCestaState } from './cesta.selectors';

describe('Cesta Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCestaState({
      [fromCesta.cestaFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
