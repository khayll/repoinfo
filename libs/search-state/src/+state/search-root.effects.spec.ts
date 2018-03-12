import {TestBed, async} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {DataPersistence} from '@nrwl/nx';
import {hot} from '@nrwl/nx/testing';
import {SearchRootEffects} from './search-root.effects';

describe('SearchRootEffects', () => {
  let actions;
  let effects: SearchRootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      providers: [
        SearchRootEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ],
    });

    effects = TestBed.get(SearchRootEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', {a: {type: 'SEARCH_LOAD_DATA'}});
      expect(effects.loadData).toBeObservable(
        hot('-a-|', {a: {type: 'SEARCH_DATA_LOADED', payload: {}}})
      );
    });
  });
});
