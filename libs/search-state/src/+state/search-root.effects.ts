import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { SearchRootState } from './search-root.interfaces';
import { SearchLoadData } from './search-root.actions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

@Injectable()
export class SearchRootEffects {
  @Effect()
  loadData = this.dataPersistence.fetch('SEARCH_LOAD_DATA', {
    run: (action: SearchLoadData, state: SearchRootState) => {
      if (action.payload) {
        return this.http.get('https://api.github.com/search/repositories?q=' + action.payload).pipe(
          map(response => {
            return {
              type: 'SEARCH_DATA_LOADED',
              payload: { ...response, query: action.payload }
            };
          })
        );
      } else {
        return {
          type: 'SEARCH_CLEAR_DATA'
        };
      }
    },

    onError: (action: SearchLoadData, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<SearchRootState>,
    private http: HttpClient
  ) {}
}
