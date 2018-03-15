import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { issuesRootReducer } from './+state/issues-root.reducer';
import { issuesRootInitialState } from './+state/issues-root.init';
import { IssuesRootEffects } from './+state/issues-root.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('issuesRoot', issuesRootReducer, { initialState: issuesRootInitialState }),
    EffectsModule.forFeature([IssuesRootEffects]),
    HttpClientModule
  ],
  providers: [IssuesRootEffects]
})
export class IssuesStateModule {}
