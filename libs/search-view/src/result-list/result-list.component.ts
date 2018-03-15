import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {SearchRootState} from "@repoinfo/search-state";
import {Repository} from "@repoinfo/data-model";

@Component({
  selector: 'ri-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  @Input() repositories: Repository[] = [];
  @Input() totalCount: number;
  @Input() loading: boolean;
  @Input() query: string;

  constructor() {
  }

  ngOnInit() {
  }

}
