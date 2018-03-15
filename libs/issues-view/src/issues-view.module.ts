import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SearchViewComponent } from '../../search-view/src/search-view/search-view.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssuesViewComponent } from './issues-view/issues-view.component';
import { IssuesStateModule } from '@repoinfo/issues-state/src/issues-state.module';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {HeaderModule} from "@repoinfo/header";
import {MarkdownModule} from "ngx-md";

export const issuesViewRoutes: Route[] = [
  {
    path: 'repo/:user/:repo',
    component: IssuesViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(issuesViewRoutes),
    IssuesStateModule,
    MatButtonModule,
    HeaderModule,
    MatIconModule,
    MatCardModule,
    MarkdownModule.forRoot()
  ],
  declarations: [IssuesListComponent, IssuesViewComponent]
})
export class IssuesViewModule {}
