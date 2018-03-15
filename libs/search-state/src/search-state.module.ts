import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { searchRootReducer } from './+state/search-root.reducer';
import { searchRootInitialState } from './+state/search-root.init';
import { SearchRootEffects } from './+state/search-root.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('searchRoot', searchRootReducer, { initialState: searchRootInitialState }),
    EffectsModule.forFeature([SearchRootEffects])
  ],
  providers: [SearchRootEffects]
})
export class SearchStateModule {}
