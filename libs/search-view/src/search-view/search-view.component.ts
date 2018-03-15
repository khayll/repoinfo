import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SearchRootState } from '@repoinfo/search-state';
import { Observable } from 'rxjs/Observable';
import { Repository } from '@repoinfo/data-model';

@Component({
  selector: 'ri-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {
  query$: Observable<string>;
  repositories$: Observable<Repository[]>;
  loading$: Observable<boolean>;
  totalCount$: Observable<number>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<SearchRootState>) {
    this.query$ = this.route.params.pipe(
      tap(params => {
        if ( this.router.url !== '/search' ) {
          this.store.dispatch({ type: 'SEARCH_LOAD_DATA', payload: params['query'] });
        } else {
          this.store.dispatch({ type: 'SEARCH_CLEAR_DATA'});
        }
      }),
      switchMap( () => this.store.select(state => state.searchRoot.query))
    );
    this.repositories$ = this.store.select(state => state.searchRoot.items);
    this.loading$ = this.store.select(state => state.searchRoot.loading);
    this.totalCount$ = this.store.select(state => state.searchRoot.total_count);
  }

  ngOnInit() { }

  search(query: string) {
    this.router.navigate(['search/' + encodeURIComponent(query)]);
    //this.store.dispatch({ type: 'SEARCH_LOAD_DATA', payload: query });
  }
}
