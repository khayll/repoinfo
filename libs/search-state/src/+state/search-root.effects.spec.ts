import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { SearchRootEffects } from './search-root.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators/delay';

describe('SearchRootEffects', () => {
  let actions: Observable<any>;
  let effects: SearchRootEffects;

  const testPayload = { total_count: 1, items: [], incomplete_results: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [SearchRootEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(SearchRootEffects);
    const httpMock = TestBed.get(HttpClient);

    spyOn(httpMock, 'get').and.returnValue(Observable.of(testPayload));
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'SEARCH_LOAD_DATA', payload: 'testQuery' } });
      expect(effects.loadData).toBeObservable(
        hot('-a-|', { a: { type: 'SEARCH_DATA_LOADED', payload: { query: 'testQuery', ...testPayload } } })
      );
    });
    it('should work for empty searches', () => {
      actions = hot('-a-|', { a: { type: 'SEARCH_LOAD_DATA' } });
      expect(effects.loadData).toBeObservable(hot('-a-|', { a: { type: 'SEARCH_CLEAR_DATA' } }));
    });
  });
});
