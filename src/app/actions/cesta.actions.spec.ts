import * as CestaActions from './cesta.actions';

describe('Cesta', () => {
  it('should create an instance', () => {
    expect(new CestaActions.LoadCestas()).toBeTruthy();
  });
});
