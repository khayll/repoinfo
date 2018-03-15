import { Issue } from '@repoinfo/data-model';

export interface IssuesRoot {
  loading: boolean;
  total_count: number;
  incomplete_results: boolean;
  items: Issue[];
}

export interface IssuesRootState {
  readonly issuesRoot: IssuesRoot;
}
