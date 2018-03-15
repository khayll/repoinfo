import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { searchViewRoutes, SearchViewModule } from '@repoinfo/search-view';
import { issuesViewRoutes } from '@repoinfo/issues-view/src/issues-view.module';
import { IssuesViewModule } from '@repoinfo/issues-view';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    children: searchViewRoutes
  },
  {
    path: 'issues',
    children: issuesViewRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    SearchViewModule,
    IssuesViewModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
