import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Issue } from '@repoinfo/data-model';
import { tap } from 'rxjs/operators/tap';
import { IssuesRootState } from '../../../issues-state/src/+state/issues-root.interfaces';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'ri-issues-view',
  templateUrl: './issues-view.component.html',
  styleUrls: ['./issues-view.component.scss']
})
export class IssuesViewComponent implements OnInit {
  issues$: Observable<Issue[]>;
  loading$: Observable<boolean>;
  totalCount$: Observable<number>;

  constructor(private location: Location, private route: ActivatedRoute, private store: Store<IssuesRootState>) {
    this.issues$ = this.route.params.pipe(
      tap(params => {
        this.store.dispatch({ type: 'ISSUES_LOAD_DATA', payload: params['user'] + '/' + params['repo'] });
      }),
      switchMap(() => this.store.select(state => state.issuesRoot.items))
    );

    this.loading$ = this.store.select(state => state.issuesRoot.loading);
    this.totalCount$ = this.store.select(state => state.issuesRoot.total_count);
  }

  ngOnInit() {}

  back() {
    this.location.back();
  }
}
