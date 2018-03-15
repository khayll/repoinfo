import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesViewComponent } from './issues-view.component';
import {HeaderModule} from "@repoinfo/header";
import {MatButtonModule, MatCardModule, MatIconModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {MarkdownModule} from "ngx-md";
import {IssuesStateModule} from "@repoinfo/issues-state/src/issues-state.module";
import {IssuesListComponent} from "@repoinfo/issues-view/src/issues-list/issues-list.component";
import {APP_BASE_HREF} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {NxModule} from "@nrwl/nx";

describe('IssuesViewComponent', () => {
  let component: IssuesViewComponent;
  let fixture: ComponentFixture<IssuesViewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          HeaderModule,
          RouterModule.forRoot([]),
          EffectsModule.forRoot([]),
          StoreModule.forRoot({}),
          NxModule.forRoot(),
          IssuesStateModule,
          MatButtonModule,
          HeaderModule,
          MatIconModule,
          MatCardModule,
          MarkdownModule.forRoot()
        ],
        declarations: [IssuesViewComponent, IssuesListComponent],
        providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
