import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '@repoinfo/data-model';

@Component({
  selector: 'ri-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {
  @Input() issues: Issue[] = [];
  @Input() loading: boolean;
  @Input() totalCount: number;

  constructor() {}

  ngOnInit() {}
}
