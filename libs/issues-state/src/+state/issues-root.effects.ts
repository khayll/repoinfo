import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { IssuesRootState } from './issues-root.interfaces';
import { IssuesLoadData, IssuesDataLoaded } from './issues-root.actions';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { empty } from 'rxjs/Observer';

@Injectable()
export class IssuesRootEffects {
  @Effect()
  loadData = this.dataPersistence.fetch('ISSUES_LOAD_DATA', {
    run: (action: IssuesLoadData, state: IssuesRootState) => {
      return this.http.get('https://api.github.com/search/issues?q=repo:' + action.payload).pipe(
        map((response: any) => {
          if (!response.errors) {
            return {
              type: 'ISSUES_DATA_LOADED',
              payload: { ...response }
            };
          }
        })
      );
    },

    onError: (action: IssuesLoadData, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<IssuesRootState>,
    private http: HttpClient
  ) {}
}
