import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {SearchRootState} from "@repoinfo/search-state";
import {Observable} from "rxjs/Observable";
import {Repository} from "@repoinfo/data-model";

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

  constructor(private route: ActivatedRoute, private store: Store<SearchRootState>) {
    this.query$ = this.store.select( state => state.searchRoot.query);
    this.repositories$ = this.store.select( state => state.searchRoot.items);
    this.loading$ = this.store.select( state => state.searchRoot.loading);
    this.totalCount$ = this.store.select( state => state.searchRoot.total_count);
  }

  ngOnInit() {
    this.route.params.pipe(
      tap( params => { this.store.dispatch( {type: 'SEARCH_LOAD_DATA', payload: params["query"]}) } )
    )
  }

  search(query: string) {
    this.store.dispatch({type: 'SEARCH_LOAD_DATA', payload: query});
  }

}
