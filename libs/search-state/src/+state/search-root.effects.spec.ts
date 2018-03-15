import {TestBed, async} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {DataPersistence} from '@nrwl/nx';
import {hot} from '@nrwl/nx/testing';
import {SearchRootEffects} from './search-root.effects';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {searchRootReducer} from "@repoinfo/search-state";
import {Observable} from "rxjs/Observable";

describe('SearchRootEffects', () => {
  let actions: Observable<any>;
  let effects: SearchRootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule
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
      actions = hot('-a-|', {a: {type: 'SEARCH_LOAD_DATA', payload: 'testQuery'}});
      expect(effects.loadData).toBeObservable(
        hot('-a-|', {a: {type: 'SEARCH_DATA_LOADED', payload: {}}})
      );
    });
    it('should work for empty searches', () => {
      actions = hot('-a-|', {a: {type: 'SEARCH_LOAD_DATA'}});
      expect(effects.loadData).toBeObservable(
        hot('-a-|', {a: {type: 'SEARCH_CLEAR_DATA'}})
      );
    });
  });
});
