import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchRootState } from '@repoinfo/search-state';
import { Repository } from '@repoinfo/data-model';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  issues(user: string, repo: string) {
    this.router.navigate(['issues/' + user + '/' + repo]);
  }
}
