import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { IssuesRootEffects } from './issues-root.effects';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { HttpClient } from "@angular/common/http";

describe('IssuesRootEffects', () => {
  let actions;
  let effects: IssuesRootEffects;

  const testPayload = { total_count: 1, items: [], incomplete_results: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), HttpClientTestingModule ],
      providers: [IssuesRootEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(IssuesRootEffects);
    const httpMock = TestBed.get(HttpClient);

    spyOn(httpMock, 'get').and.returnValue(Observable.of(testPayload));

  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'ISSUES_LOAD_DATA', payload: 'user/repo' } });
      expect(effects.loadData).toBeObservable(
        hot('-a-|', { a: { type: 'ISSUES_DATA_LOADED', payload: testPayload } })
      );
    });
  });
});
