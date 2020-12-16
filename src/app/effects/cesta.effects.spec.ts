import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CestaEffects } from './cesta.effects';

describe('CestaEffects', () => {
  let actions$: Observable<any>;
  let effects: CestaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CestaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CestaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
