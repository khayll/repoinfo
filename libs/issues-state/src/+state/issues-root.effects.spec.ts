import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { IssuesRootEffects } from './issues-root.effects';

describe('IssuesRootEffects', () => {
  let actions;
  let effects: IssuesRootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [IssuesRootEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(IssuesRootEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(effects.loadData).toBeObservable(hot('-a-|', { a: { type: 'DATA_LOADED', payload: {} } }));
    });
  });
});
