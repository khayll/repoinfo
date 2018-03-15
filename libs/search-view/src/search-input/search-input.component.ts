import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchRootState } from '@repoinfo/search-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ri-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() query: string;
  @Input() loading: boolean;
  @Output() search = new EventEmitter<string>();

  searchField: FormControl;
  searchFieldSubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<SearchRootState>) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchFieldSubscription = this.searchField.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(query => {
          this.search.emit(query);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.searchFieldSubscription.unsubscribe();
  }

  clearSearch() {
    this.search.emit('');
  }
}
