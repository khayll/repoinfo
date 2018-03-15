import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesListComponent } from './issues-list.component';
import {MatCardModule} from "@angular/material";
import {MarkdownModule} from "ngx-md";

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          MatCardModule,
          MarkdownModule.forRoot()
        ],
        declarations: [IssuesListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
