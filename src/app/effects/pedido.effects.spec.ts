import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PedidoEffects } from './pedido.effects';

describe('PedidoEffects', () => {
  let actions$: Observable<any>;
  let effects: PedidoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PedidoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PedidoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
