import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewComponent } from './search-view.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { SearchInputComponent } from '@repoinfo/search-view/src/search-input/search-input.component';
import { ResultListComponent } from '@repoinfo/search-view/src/result-list/result-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchStateModule } from '@repoinfo/search-state';
import { NxModule } from '@nrwl/nx';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from "@repoinfo/header";

describe('SearchViewComponent', () => {
  let component: SearchViewComponent;
  let fixture: ComponentFixture<SearchViewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          MatIconModule,
          MatToolbarModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatCardModule,
          MatListModule,
          RouterTestingModule,
          EffectsModule.forRoot([]),
          StoreModule.forRoot({}),
          SearchStateModule,
          NxModule.forRoot(),
          MatInputModule,
          NoopAnimationsModule,
          HeaderModule
        ],
        declarations: [SearchViewComponent, SearchInputComponent, ResultListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
