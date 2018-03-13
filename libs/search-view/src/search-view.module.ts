import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultListComponent } from './result-list/result-list.component';
import { SearchViewComponent } from './search-view/search-view.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchStateModule} from "@repoinfo/search-state";

export const searchViewRoutes: Route[] = [
  {
    path: ':query',
    component: SearchViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SearchStateModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forChild(searchViewRoutes)
  ],
  declarations: [SearchInputComponent, ResultListComponent, SearchViewComponent]
})
export class SearchViewModule {
}
