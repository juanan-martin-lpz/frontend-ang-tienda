import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CatalogoEffects } from './catalogo.effects';

describe('CatalogoEffects', () => {
  let actions$: Observable<any>;
  let effects: CatalogoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatalogoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CatalogoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
